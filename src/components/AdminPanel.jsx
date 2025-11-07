import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersAPI } from '../api/client';
import { getApiUrl } from '../config/api.js';
import AdminLogin from './AdminLogin';
import {
    Bell,
    CheckCircle2,
    Home,
    User,
    Phone,
    MapPin,
    Clock,
    Check,
    Inbox,
    Sparkles,
    Plus,
    Trash2,
    X
} from 'lucide-react';
import './AdminPanel.css';

function AdminPanel() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeOrders, setActiveOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newOrder, setNewOrder] = useState({
        client: { name: '', phone: '' },
        address: { street: '', city: 'Kraków' }
    });

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const username = localStorage.getItem('adminBasicUser');
        const password = localStorage.getItem('adminBasicPassword');

        if (!username || !password) {
            setLoading(false);
            return;
        }

        try {
            // Проверяем учетные данные через API
            const response = await fetch(`${getApiUrl()}/admin/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                }
            });

            if (response.ok) {
                setIsAuthenticated(true);
            } else {
                // Удаляем неверные учетные данные
                localStorage.removeItem('adminBasicUser');
                localStorage.removeItem('adminBasicPassword');
            }
        } catch (err) {
            console.error('Ошибка проверки авторизации:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
        setLoading(false);
    };

    useEffect(() => {
        if (isAuthenticated) {
            loadOrders();
            // Автообновление каждые 30 секунд
            const interval = setInterval(loadOrders, 30000);
            return () => clearInterval(interval);
        }
    }, [isAuthenticated]);

    const loadOrders = async () => {
        try {
            // Получаем все заказы без авторизации через публичный эндпоинт
            const response = await ordersAPI.getAllOrders();
            const orders = response.data.orders || [];

            // Разделяем на активные и выполненные
            const active = orders.filter(order => order.status !== 'done' && order.status !== 'cancelled');
            const completed = orders.filter(order => order.status === 'done' || order.status === 'cancelled');

            setActiveOrders(active);
            setCompletedOrders(completed);
        } catch (err) {
            console.error('Ошибка загрузки заказов:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleMarkAsDone = async (orderId) => {
        if (!confirm('Oznaczyć zamówienie jako wykonane?')) return;

        try {
            await ordersAPI.markAsDone(orderId);
            await loadOrders();
        } catch (err) {
            alert(err.response?.data?.error || 'Błąd aktualizacji statusu');
        }
    };

    const handleDeleteOrder = async (orderId) => {
        if (!confirm('Czy na pewno chcesz usunąć to zamówienie?')) return;

        try {
            await ordersAPI.deleteOrder(orderId);
            await loadOrders();
        } catch (err) {
            alert(err.response?.data?.error || 'Błąd usuwania zamówienia');
        }
    };

    const handleCreateOrder = async (e) => {
        e.preventDefault();
        try {
            await ordersAPI.createOrder({
                client: newOrder.client,
                address: newOrder.address,
                consent: { gdpr: true }
            });
            setShowCreateForm(false);
            setNewOrder({
                client: { name: '', phone: '' },
                address: { street: '', city: 'Kraków' }
            });
            await loadOrders();
        } catch (err) {
            alert(err.response?.data?.error || 'Błąd tworzenia zamówienia');
        }
    };

    const formatPhone = (phone) => {
        // Форматируем телефон для удобства
        return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3');
    };

    const getMapUrl = (street, city) => {
        // Формируем полный адрес
        const fullAddress = `${street}, ${city || 'Kraków'}`;
        // Кодируем адрес для URL
        const encodedAddress = encodeURIComponent(fullAddress);
        // Используем универсальный URL, который работает на всех устройствах
        // На iOS откроется Apple Maps, на Android - Google Maps
        return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    };

    if (loading) {
        return (
            <div className="admin-panel">
                <div className="admin-loading">
                    <div className="spinner"></div>
                    <p>Ładowanie...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return (
        <div className="admin-panel">
            <div className="admin-hero">
                <div className="admin-hero-content">
                    <h1>Panel zarządzania zamówieniami</h1>
                    <p>Śledź i zarządzaj wszystkimi zamówieniami w jednym miejscu</p>
                    <button onClick={() => navigate('/')} className="btn-home">
                        <Home size={18} />
                        <span>Powrót do strony głównej</span>
                    </button>
                </div>
            </div>

            <div className="admin-container">
                {/* Форма создания заказа */}
                {showCreateForm && (
                    <section className="orders-section create-form-section">
                        <div className="section-header">
                            <h2>Utwórz nowe zamówienie</h2>
                            <button onClick={() => setShowCreateForm(false)} className="btn-close-form">
                                <X size={20} />
                            </button>
                        </div>
                        <form onSubmit={handleCreateOrder} className="create-order-form">
                            <div className="form-group">
                                <label>Imię klienta *</label>
                                <input
                                    type="text"
                                    value={newOrder.client.name}
                                    onChange={(e) => setNewOrder({
                                        ...newOrder,
                                        client: { ...newOrder.client, name: e.target.value }
                                    })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Telefon klienta *</label>
                                <input
                                    type="tel"
                                    value={newOrder.client.phone}
                                    onChange={(e) => setNewOrder({
                                        ...newOrder,
                                        client: { ...newOrder.client, phone: e.target.value }
                                    })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Ulica i numer *</label>
                                <input
                                    type="text"
                                    value={newOrder.address.street}
                                    onChange={(e) => setNewOrder({
                                        ...newOrder,
                                        address: { ...newOrder.address, street: e.target.value }
                                    })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Miasto</label>
                                <input
                                    type="text"
                                    value={newOrder.address.city}
                                    onChange={(e) => setNewOrder({
                                        ...newOrder,
                                        address: { ...newOrder.address, city: e.target.value }
                                    })}
                                />
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn-primary">Utwórz zamówienie</button>
                                <button type="button" onClick={() => setShowCreateForm(false)} className="btn-secondary">
                                    Anuluj
                                </button>
                            </div>
                        </form>
                    </section>
                )}

                {/* Aktywne zamówienia */}
                <section className="orders-section">
                    <div className="section-header">
                        <div className="section-title">
                            <Bell size={24} strokeWidth={2.5} />
                            <h2>Aktywne zamówienia</h2>
                        </div>
                        <div className="section-actions">
                            <button onClick={() => setShowCreateForm(true)} className="btn-add">
                                <Plus size={18} />
                                <span>Utwórz zamówienie</span>
                            </button>
                            <span className="count-badge">{activeOrders.length}</span>
                        </div>
                    </div>

                    {activeOrders.length === 0 ? (
                        <div className="empty-state">
                            <Inbox size={64} strokeWidth={1.5} className="empty-icon" />
                            <p>Brak aktywnych zamówień</p>
                        </div>
                    ) : (
                        <div className="orders-grid">
                            {activeOrders.map(order => (
                                <div key={order._id} className="order-card active">
                                    <div className="order-card-header">
                                        <span className="order-number">#{order._id.toString().slice(-6)}</span>
                                        <div className="order-actions-header">
                                            <button
                                                onClick={() => handleDeleteOrder(order._id)}
                                                className="btn-delete"
                                                title="Usuń zamówienie"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleMarkAsDone(order._id)}
                                                className="btn-complete"
                                                title="Oznacz jako wykonane"
                                            >
                                                <Check size={20} strokeWidth={3} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="order-card-body">
                                        <div className="order-info">
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <User size={18} />
                                                </div>
                                                <strong>{order.client.name}</strong>
                                            </div>
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <Phone size={18} />
                                                </div>
                                                <a href={`tel:${order.client.phone}`} className="phone-link">
                                                    {formatPhone(order.client.phone)}
                                                </a>
                                            </div>
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <MapPin size={18} />
                                                </div>
                                                <a
                                                    href={getMapUrl(order.address.street, order.address.city)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="address-link"
                                                >
                                                    {order.address.street}
                                                </a>
                                            </div>
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <Clock size={18} />
                                                </div>
                                                <span className="order-time">
                                                    {new Date(order.createdAt).toLocaleString('pl-PL', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {/* Wykonane zamówienia */}
                <section className="orders-section">
                    <div className="section-header">
                        <div className="section-title">
                            <CheckCircle2 size={24} strokeWidth={2.5} />
                            <h2>Wykonane zamówienia</h2>
                        </div>
                        <span className="count-badge secondary">{completedOrders.length}</span>
                    </div>

                    <p className="section-note">
                        <Clock size={16} />
                        <span>Zamówienia są automatycznie usuwane o północy (00:00)</span>
                    </p>

                    {completedOrders.length === 0 ? (
                        <div className="empty-state">
                            <Sparkles size={64} strokeWidth={1.5} className="empty-icon" />
                            <p>Brak wykonanych zamówień</p>
                        </div>
                    ) : (
                        <div className="orders-grid">
                            {completedOrders.map(order => (
                                <div key={order._id} className="order-card completed">
                                    <div className="order-card-header">
                                        <span className="order-number">#{order._id.toString().slice(-6)}</span>
                                        <div className="order-actions-header">
                                            <button
                                                onClick={() => handleDeleteOrder(order._id)}
                                                className="btn-delete"
                                                title="Usuń zamówienie"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                            <span className="completed-badge">
                                                <Check size={14} strokeWidth={3} />
                                                <span>Wykonane</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="order-card-body">
                                        <div className="order-info">
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <User size={18} />
                                                </div>
                                                <strong>{order.client.name}</strong>
                                            </div>
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <Phone size={18} />
                                                </div>
                                                <span>{formatPhone(order.client.phone)}</span>
                                            </div>
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <MapPin size={18} />
                                                </div>
                                                <a
                                                    href={getMapUrl(order.address.street, order.address.city)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="address-link"
                                                >
                                                    {order.address.street}
                                                </a>
                                            </div>
                                            <div className="info-row">
                                                <div className="info-icon">
                                                    <CheckCircle2 size={18} />
                                                </div>
                                                <span className="order-time">
                                                    {new Date(order.updatedAt).toLocaleString('pl-PL', {
                                                        day: '2-digit',
                                                        month: '2-digit',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}

export default AdminPanel;

