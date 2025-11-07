import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Clock, Home } from 'lucide-react';
import './OrderSuccess.css';

function OrderSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderId, viewToken } = location.state || {};

    useEffect(() => {
        if (orderId && viewToken) {
            // Сохраняем заказ в localStorage
            const orderData = {
                id: orderId,
                token: viewToken,
                createdAt: new Date().toISOString()
            };

            const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
            // Проверяем, нет ли уже такого заказа
            if (!savedOrders.find(o => o.id === orderId)) {
                savedOrders.push(orderData);
                localStorage.setItem('orders', JSON.stringify(savedOrders));
            }
        }
    }, [orderId, viewToken]);

    if (!orderId) {
        return (
            <div className="order-success-container">
                <div className="order-success-wrapper">
                    <div className="error-message">
                        <p>Dane zamówienia nie zostały znalezione</p>
                    </div>
                    <button onClick={() => navigate('/')} className="btn-home">
                        <Home size={18} />
                        <span>Powrót do strony głównej</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="order-success-container">
            <div className="order-success-wrapper">
                <div className="success-icon-wrapper">
                    <CheckCircle2 size={64} strokeWidth={2} className="success-icon" />
                </div>
                <h1>Zamówienie zostało utworzone!</h1>
                <p className="order-id">Numer zamówienia: <strong>#{orderId.toString().slice(-6)}</strong></p>

                <div className="success-message">
                    <div className="message-item">
                        <Clock size={20} />
                        <div>
                            <strong>Twoje zamówienie zostało zapisane</strong>
                            <p>Możesz śledzić status zamówienia na stronie głównej</p>
                        </div>
                    </div>
                </div>

                <div className="action-buttons">
                    <button onClick={() => navigate('/')} className="btn-primary">
                        <Home size={18} />
                        <span>Powrót do strony głównej</span>
                    </button>
                </div>

                <div className="info-box">
                    <h3>Co dalej?</h3>
                    <ul>
                        <li>📋 Twoje zamówienie zostało zapisane lokalnie</li>
                        <li>⏱️ Możesz śledzić czas od utworzenia zamówienia</li>
                        <li>📱 Status zamówienia będzie aktualizowany automatycznie</li>
                        <li>✅ Po zakończeniu zamówienie zostanie automatycznie usunięte</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;
