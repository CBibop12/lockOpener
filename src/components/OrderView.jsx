import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ordersAPI } from '../api/client';
import { Clock, MapPin, User, Phone, Home } from 'lucide-react';
import './OrderView.css';

function OrderView() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('t');

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [elapsedTime, setElapsedTime] = useState('');

    const updateElapsedTime = useCallback(() => {
        if (!order) return;

        const now = new Date();
        const created = new Date(order.createdAt);
        const diff = Math.floor((now - created) / 1000); // секунды

        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        if (hours > 0) {
            setElapsedTime(`${hours}h ${minutes}m ${seconds}s`);
        } else if (minutes > 0) {
            setElapsedTime(`${minutes}m ${seconds}s`);
        } else {
            setElapsedTime(`${seconds}s`);
        }
    }, [order]);

    useEffect(() => {
        if (token) {
            loadOrder();
        } else {
            setError('Token dostępu nie został podany');
            setLoading(false);
        }
    }, [id, token]);

    useEffect(() => {
        if (order) {
            updateElapsedTime();
            const interval = setInterval(() => {
                updateElapsedTime();
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [order, updateElapsedTime]);

    const loadOrder = async () => {
        try {
            const response = await ordersAPI.getByToken(id, token);
            setOrder(response.data);
            setError('');
        } catch (err) {
            setError(err.response?.data?.error || 'Błąd ładowania zamówienia');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="order-view-container">
                <div className="loading">Ładowanie...</div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="order-view-container">
                <div className="error-message">
                    {error || 'Zamówienie nie znalezione'}
                    <br />
                    <button onClick={() => navigate('/')} className="btn-secondary" style={{ marginTop: '20px' }}>
                        <Home size={18} />
                        <span>Powrót do strony głównej</span>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="order-view-container">
            <div className="order-view-wrapper">
                <div className="order-header">
                    <h1>Zamówienie #{order._id.toString().slice(-6)}</h1>
                </div>

                <div className="order-timer">
                    <Clock size={24} />
                    <div>
                        <div className="timer-label">Czas od utworzenia</div>
                        <div className="timer-value">{elapsedTime}</div>
                    </div>
                </div>

                <div className="order-details">
                    <div className="detail-section">
                        <div className="detail-icon">
                            <User size={20} />
                        </div>
                        <div>
                            <h3>Klient</h3>
                            <p><strong>{order.client.name}</strong></p>
                        </div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-icon">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3>Telefon</h3>
                            <p><a href={`tel:${order.client.phone}`}>{order.client.phone}</a></p>
                        </div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-icon">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h3>Adres</h3>
                            <p>{order.address.street}</p>
                            <p>{order.address.city}</p>
                        </div>
                    </div>

                    <div className="detail-section">
                        <div className="detail-icon">
                            <Clock size={20} />
                        </div>
                        <div>
                            <h3>Utworzono</h3>
                            <p>{new Date(order.createdAt).toLocaleString('pl-PL')}</p>
                        </div>
                    </div>
                </div>

                <div className="order-actions">
                    <button onClick={() => navigate('/')} className="btn-secondary">
                        <Home size={18} />
                        <span>Powrót do strony głównej</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderView;
