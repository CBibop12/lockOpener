import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Zap, Shield, BadgeCheck, Phone } from 'lucide-react';
import OrdersList from './OrdersList';
import { pageMeta } from '../seo';
import { translations } from '../translations';
import { services, servicePath } from '../services';
import { serviceIcons } from './serviceIcons';
import SiteHeader from './SiteHeader';
import './Landing.css';

// Карточки на лендинге ведут на страницы услуг (src/services.js)
const serviceCards = [
    { key: 'door', title: 'service1Title', desc: 'service1Desc' },
    { key: 'car', title: 'service2Title', desc: 'service2Desc' },
    { key: 'ignition', title: 'service3Title', desc: 'service3Desc' },
    { key: 'locks', title: 'service4Title', desc: 'service4Desc' },
];

function Landing({ lang = 'pl' }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        street: '',
        city: 'Kraków',
        gdpr: false
    });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const t = translations[lang];

    // Нужно при клиентской навигации; при прямом заходе head уже отрендерен prerender'ом
    useEffect(() => {
        document.title = pageMeta[lang].title;
        document.documentElement.lang = pageMeta[lang].htmlLang;
    }, [lang]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus({ type: '', message: '' });

        try {
            // axios грузится только при отправке формы — не утяжеляет первую загрузку лендинга
            const { ordersAPI } = await import('../api/client');
            const response = await ordersAPI.create({
                client: {
                    name: formData.name,
                    phone: formData.phone
                },
                address: {
                    street: formData.street,
                    city: formData.city
                },
                consent: {
                    gdpr: formData.gdpr
                }
            });

            const data = response.data;

            setFormStatus({ type: 'success', message: t.formSuccess });

            // Извлекаем токен из viewUrl
            const viewUrl = data.viewUrl;
            const url = new URL(viewUrl);
            const viewToken = url.searchParams.get('t');

            navigate('/order-success', {
                state: {
                    orderId: data.orderId,
                    viewToken: viewToken,
                }
            });
        } catch (error) {
            const errorMessage = error.response?.data?.error || t.formError;
            setFormStatus({ type: 'error', message: errorMessage });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="landing-container">
            <SiteHeader lang={lang} />

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">{t.heroTitle}</h1>
                    <p className="hero-subtitle">{t.heroSubtitle}</p>
                    <p className="hero-description">{t.heroDescription}</p>
                    <div className="hero-actions">
                        <a href="#contact" className="btn-hero">{t.heroBtn}</a>
                        <a href={`tel:${t.headerPhone.replace(/\s/g, '')}`} className="btn-hero btn-hero-call">
                            <Phone size={22} />
                            <span>{t.headerPhone}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="section-content">
                    <h2 className="section-title">{t.featuresTitle}</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Clock size={48} strokeWidth={1.5} />
                            </div>
                            <h3>{t.feature1Title}</h3>
                            <p>{t.feature1Desc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Zap size={48} strokeWidth={1.5} />
                            </div>
                            <h3>{t.feature2Title}</h3>
                            <p>{t.feature2Desc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Shield size={48} strokeWidth={1.5} />
                            </div>
                            <h3>{t.feature3Title}</h3>
                            <p>{t.feature3Desc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <BadgeCheck size={48} strokeWidth={1.5} />
                            </div>
                            <h3>{t.feature4Title}</h3>
                            <p>{t.feature4Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="section-content">
                    <h2 className="section-title">{t.servicesTitle}</h2>
                    <div className="services-grid">
                        {serviceCards.map(({ key, title, desc }) => {
                            const Icon = serviceIcons[services[key].icon];
                            return (
                                <div className="service-card" key={key}>
                                    <div className="service-icon-wrapper">
                                        <Icon size={48} strokeWidth={1.5} />
                                    </div>
                                    <h3>
                                        <a className="service-card-link" href={servicePath(key, lang)}>{t[title]}</a>
                                    </h3>
                                    <p>{t[desc]}</p>
                                </div>
                            );
                        })}
                    </div>
                    <p className="services-note">{t.servicesNote}</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq">
                <div className="faq-content">
                    <h2 className="section-title">{t.faqTitle}</h2>
                    <div className="faq-list">
                        {t.faq.map(({ q, a }) => (
                            <details className="faq-item" key={q}>
                                <summary><h3>{q}</h3></summary>
                                <p>{a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact" id="contact">
                <div className="contact-content">
                    <h2 className="section-title">{t.contactTitle}</h2>
                    <p className="contact-subtitle">{t.contactSubtitle}</p>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t.formName} *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={t.formNamePlaceholder}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">{t.formPhone} *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={t.formPhonePlaceholder}
                                    pattern="^\+?[1-9]\d{1,14}$"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="street">{t.formAddress} *</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleInputChange}
                                    placeholder={t.formAddressPlaceholder}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">{t.formCity}</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder={t.formCityPlaceholder}
                                />
                            </div>
                        </div>

                        <div className="form-group checkbox-group">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    name="gdpr"
                                    checked={formData.gdpr}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span>{t.formGdpr} *</span>
                            </label>
                        </div>

                        {formStatus.message && (
                            <div className={`form-message ${formStatus.type}`}>
                                {formStatus.message}
                            </div>
                        )}

                        <button type="submit" className="btn-submit" disabled={isSubmitting}>
                            {isSubmitting ? t.formSubmitting : t.formSubmit}
                        </button>
                    </form>
                </div>
            </section>

            {/* Orders List */}
            <OrdersList />

            {/* Footer */}
            <footer className="landing-footer">
                <p>{t.footerText}</p>
            </footer>
        </div>
    );
}

export default Landing;
