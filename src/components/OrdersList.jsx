import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersAPI } from '../api/client';
import { Clock, Car } from 'lucide-react';
import './OrdersList.css';

function OrdersList() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadOrders();
        // Проверяем статусы каждые 30 секунд
        const interval = setInterval(checkOrdersStatus, 30000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Обновляем таймеры каждую секунду
        const interval = setInterval(() => {
            setOrders(prev => prev.map(order => ({
                ...order,
                elapsedTime: calculateElapsedTime(order.createdAt)
            })));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const loadOrders = () => {
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        const ordersWithTime = savedOrders.map((order, index) => ({
            ...order,
            elapsedTime: calculateElapsedTime(order.createdAt),
            orderNumber: index + 1
        }));
        setOrders(ordersWithTime);
        setLoading(false);

        // Проверяем статусы при загрузке
        checkOrdersStatus();
    };

    const calculateElapsedTime = (createdAt) => {
        const now = new Date();
        const created = new Date(createdAt);
        const diff = Math.floor((now - created) / 1000);

        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        } else {
            return `${seconds}s`;
        }
    };

    const checkOrdersStatus = async () => {
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        const ordersToRemove = [];

        // Проверяем каждый заказ через API
        for (const order of savedOrders) {
            try {
                // Используем getByToken для проверки существования заказа
                const response = await ordersAPI.getByToken(order.id, order.token);
                const status = response.data.status;

                // Если заказ выполнен или отменен, удаляем его
                if (status === 'done' || status === 'cancelled') {
                    ordersToRemove.push(order.id);
                }
            } catch (err) {
                // Если 404 или другая ошибка - заказ не существует, удаляем его
                if (err.response?.status === 404 || err.response?.status === 400) {
                    ordersToRemove.push(order.id);
                } else {
                    console.error(`Błąd sprawdzania statusu zamówienia ${order.id}:`, err);
                }
            }
        }

        // Удаляем все несуществующие/выполненные заказы одним разом
        if (ordersToRemove.length > 0) {
            const filtered = savedOrders.filter(o => !ordersToRemove.includes(o.id));
            localStorage.setItem('orders', JSON.stringify(filtered));
            setOrders(filtered.map((order, index) => ({
                ...order,
                elapsedTime: calculateElapsedTime(order.createdAt),
                orderNumber: index + 1
            })));
        }
    };

    const removeOrder = (orderId) => {
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        const filtered = savedOrders.filter(o => o.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(filtered));
        setOrders(filtered.map((order, index) => ({
            ...order,
            elapsedTime: calculateElapsedTime(order.createdAt),
            orderNumber: index + 1
        })));
    };

    const handleViewOrder = (orderId, token) => {
        navigate(`/orders/${orderId}?t=${token}`);
    };

    if (loading) {
        return null;
    }

    if (orders.length === 0) {
        return null;
    }

    return (
        <div className="orders-list-section">
            <div className="orders-list-header">
                <h2>{orders.length === 1 ? 'Zamówienie' : 'Zamówienia'}</h2>
                <span className="orders-count">{orders.length}</span>
            </div>

            <div className="orders-grid">
                {orders.map((order, index) => (
                    <div key={order.id} className="order-card">
                        <div className="order-title">
                            {orders.length === 1 ? 'Twoje zamówienie' : `Twoje zamówienie numer ${order.orderNumber}`}
                        </div>

                        <div className="order-status">
                            <Car size={18} />
                            <span>Kierowca już w drodze</span>
                        </div>

                        <div className="order-timer">
                            <Clock size={18} />
                            <span>{order.elapsedTime}</span>
                        </div>

                        <div className="order-actions">
                            <button
                                onClick={() => handleViewOrder(order.id, order.token)}
                                className="btn-view"
                            >
                                Szczegóły
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrdersList;

