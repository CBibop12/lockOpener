import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersAPI } from '../api/client';
import './OrderForm.css';

const translations = {
    pl: {
        title: 'Złóż zamówienie',
        subtitle: 'Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe',
        contactInfo: 'Informacje kontaktowe',
        name: 'Imię',
        namePlaceholder: 'Twoje imię',
        phone: 'Telefon',
        phonePlaceholder: '+48xxxxxxxxx',
        addressInfo: 'Adres',
        street: 'Ulica i numer domu',
        streetPlaceholder: 'ul. Przykładowa 123',
        city: 'Miasto',
        cityPlaceholder: 'Kraków',
        gdprConsent: 'Wyrażam zgodę na przetwarzanie danych osobowych (RODO)',
        submit: 'Złóż zamówienie',
        submitting: 'Wysyłanie...',
        error: 'Błąd podczas tworzenia zamówienia',
    },
    en: {
        title: 'Place an Order',
        subtitle: 'Fill out the form and we will contact you as soon as possible',
        contactInfo: 'Contact Information',
        name: 'Name',
        namePlaceholder: 'Your name',
        phone: 'Phone',
        phonePlaceholder: '+48xxxxxxxxx',
        addressInfo: 'Address',
        street: 'Street and house number',
        streetPlaceholder: 'Example Street 123',
        city: 'City',
        cityPlaceholder: 'Krakow',
        gdprConsent: 'I consent to the processing of personal data (GDPR)',
        submit: 'Place order',
        submitting: 'Submitting...',
        error: 'Error creating order',
    }
};

function OrderForm() {
    const navigate = useNavigate();
    const [lang, setLang] = useState('pl');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        client: {
            name: '',
            phone: '',
        },
        address: {
            street: '',
            city: 'Kraków',
        },
        consent: {
            gdpr: false,
        },
    });

    const t = translations[lang];

    const toggleLanguage = () => {
        setLang(prevLang => prevLang === 'pl' ? 'en' : 'pl');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith('client.')) {
            const field = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                client: { ...prev.client, [field]: value }
            }));
        } else if (name.startsWith('address.')) {
            const field = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                address: { ...prev.address, [field]: value }
            }));
        } else if (name === 'gdpr') {
            setFormData(prev => ({
                ...prev,
                consent: { ...prev.consent, gdpr: checked }
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await ordersAPI.create(formData);

            // Извлекаем токен из viewUrl
            const viewUrl = response.data.viewUrl;
            const url = new URL(viewUrl);
            const viewToken = url.searchParams.get('t');

            // Перенаправляем на страницу успеха с данными заказа
            navigate('/order-success', {
                state: {
                    orderId: response.data.orderId,
                    viewToken: viewToken,
                }
            });
        } catch (err) {
            setError(err.response?.data?.error || t.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="order-form-container">
            <div className="order-form-wrapper">
                <div className="form-header">
                    <button className="lang-switcher" onClick={toggleLanguage}>
                        {lang === 'pl' ? '🇬🇧 EN' : '🇵🇱 PL'}
                    </button>
                </div>

                <h1>{t.title}</h1>
                <p className="subtitle">{t.subtitle}</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="order-form">
                    <div className="form-section">
                        <h2>{t.contactInfo}</h2>

                        <div className="form-group">
                            <label htmlFor="client.name">{t.name} *</label>
                            <input
                                type="text"
                                id="client.name"
                                name="client.name"
                                value={formData.client.name}
                                onChange={handleChange}
                                required
                                placeholder={t.namePlaceholder}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="client.phone">{t.phone} *</label>
                            <input
                                type="tel"
                                id="client.phone"
                                name="client.phone"
                                value={formData.client.phone}
                                onChange={handleChange}
                                required
                                placeholder={t.phonePlaceholder}
                                pattern="^\+?[1-9]\d{1,14}$"
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <h2>{t.addressInfo}</h2>

                        <div className="form-group">
                            <label htmlFor="address.street">{t.street} *</label>
                            <input
                                type="text"
                                id="address.street"
                                name="address.street"
                                value={formData.address.street}
                                onChange={handleChange}
                                required
                                placeholder={t.streetPlaceholder}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address.city">{t.city}</label>
                            <input
                                type="text"
                                id="address.city"
                                name="address.city"
                                value={formData.address.city}
                                onChange={handleChange}
                                placeholder={t.cityPlaceholder}
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                name="gdpr"
                                checked={formData.consent.gdpr}
                                onChange={handleChange}
                                required
                            />
                            <span>{t.gdprConsent} *</span>
                        </label>
                    </div>

                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? t.submitting : t.submit}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrderForm;
