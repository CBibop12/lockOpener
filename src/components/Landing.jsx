import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Zap, Shield, BadgeCheck, Home, Car, Lock, Package, Phone, MapPin } from 'lucide-react';
import OrdersList from './OrdersList';
import { ordersAPI } from '../api/client';
import './Landing.css';

const translations = {
    pl: {
        // Header
        logoText: 'Locksmith',
        logoSubtext: 'Kraków',
        headerPhone: '+48 123 456 789',
        headerSlogan: 'Dostępni 24/7',
        orderBtn: 'Zamów usługę',

        // Hero
        heroTitle: 'Profesjonalne Otwieranie Zamków w Krakowie',
        heroSubtitle: 'Pomoc 24/7 - Szybko, Bezpiecznie, Profesjonalnie',
        heroDescription: 'Zamknięte drzwi? Zgubione klucze? Zepsuty zamek? Jesteśmy do Twojej dyspozycji przez całą dobę!',
        heroBtn: 'Zamów teraz',

        // Features
        featuresTitle: 'Dlaczego my?',
        feature1Title: 'Dostępność 24/7',
        feature1Desc: 'Pracujemy przez całą dobę, 7 dni w tygodniu',
        feature2Title: 'Szybka reakcja',
        feature2Desc: 'Docieramy na miejsce w ciągu 30 minut',
        feature3Title: 'Profesjonalizm',
        feature3Desc: 'Doświadczeni specjaliści z nowoczesnym sprzętem',
        feature4Title: 'Przejrzyste ceny',
        feature4Desc: 'Uczciwe ceny bez ukrytych opłat',

        // Services
        servicesTitle: 'Nasze usługi',
        service1Title: 'Otwieranie mieszkań',
        service1Desc: 'Otwieranie drzwi wejściowych i wewnętrznych',
        service2Title: 'Otwieranie samochodów',
        service2Desc: 'Otwieranie drzwi i bagażników bez uszkodzeń',
        service3Title: 'Otwieranie sejfów',
        service3Desc: 'Profesjonalne otwieranie sejfów i skrytek',
        service4Title: 'Inne usługi',
        service4Desc: 'Otwieranie wszelkich zamków i urządzeń zabezpieczających',

        // Contact form section
        contactTitle: 'Potrzebujesz pomocy teraz?',
        contactSubtitle: 'Wypełnij formularz - skontaktujemy się natychmiast',

        // Form
        formName: 'Imię',
        formNamePlaceholder: 'Twoje imię',
        formPhone: 'Telefon',
        formPhonePlaceholder: '+48xxxxxxxxx',
        formAddress: 'Adres',
        formAddressPlaceholder: 'ul. Przykładowa 123',
        formCity: 'Miasto',
        formCityPlaceholder: 'Kraków',
        formGdpr: 'Wyrażam zgodę na przetwarzanie danych osobowych (RODO)',
        formSubmit: 'Wyślij zgłoszenie',
        formSubmitting: 'Wysyłanie...',
        formError: 'Błąd. Spróbuj ponownie.',
        formSuccess: 'Zgłoszenie wysłane pomyślnie!',

        // Footer
        footerText: `© ${new Date().getFullYear()} Locksmith Kraków. Wszelkie prawa zastrzeżone.`,
    },
    en: {
        // Header
        logoText: 'Locksmith',
        logoSubtext: 'Kraków',
        headerPhone: '+48 123 456 789',
        headerSlogan: 'Available 24/7',
        orderBtn: 'Order Service',

        // Hero
        heroTitle: 'Professional Lock Opening in Krakow',
        heroSubtitle: '24/7 Help - Fast, Safe, Professional',
        heroDescription: 'Locked out? Lost keys? Broken lock? We are at your service around the clock!',
        heroBtn: 'Order now',

        // Features
        featuresTitle: 'Why choose us?',
        feature1Title: '24/7 Availability',
        feature1Desc: 'We work around the clock, 7 days a week',
        feature2Title: 'Quick response',
        feature2Desc: 'We arrive within 30 minutes',
        feature3Title: 'Professionalism',
        feature3Desc: 'Experienced specialists with modern equipment',
        feature4Title: 'Transparent pricing',
        feature4Desc: 'Fair prices with no hidden fees',

        // Services
        servicesTitle: 'Our services',
        service1Title: 'Apartment opening',
        service1Desc: 'Opening entrance and interior doors',
        service2Title: 'Car opening',
        service2Desc: 'Opening doors and trunks without damage',
        service3Title: 'Safe opening',
        service3Desc: 'Professional opening of safes and lockboxes',
        service4Title: 'Other services',
        service4Desc: 'Opening all types of locks and security devices',

        // Contact form section
        contactTitle: 'Need help now?',
        contactSubtitle: 'Fill out the form - we will contact you immediately',

        // Form
        formName: 'Name',
        formNamePlaceholder: 'Your name',
        formPhone: 'Phone',
        formPhonePlaceholder: '+48xxxxxxxxx',
        formAddress: 'Address',
        formAddressPlaceholder: 'Example Street 123',
        formCity: 'City',
        formCityPlaceholder: 'Krakow',
        formGdpr: 'I consent to the processing of personal data (GDPR)',
        formSubmit: 'Submit request',
        formSubmitting: 'Submitting...',
        formError: 'Error. Please try again.',
        formSuccess: 'Request submitted successfully!',

        // Footer
        footerText: `© ${new Date().getFullYear()} Locksmith Kraków. All rights reserved.`,
    }
};

function Landing() {
    const navigate = useNavigate();
    const [lang, setLang] = useState('pl');
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

    const toggleLanguage = () => {
        setLang(prevLang => prevLang === 'pl' ? 'en' : 'pl');
    };

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
            {/* Header */}
            <header className="landing-header">
                <div className="header-content">
                    <div className="logo-container">
                        <div className="logo-placeholder">
                            <img src="/logo.png" alt="Locksmith" />
                        </div>
                        <div className="logo-text">
                            <h1 className="logo">
                                {t.logoText}
                                <span className="logo-location">{t.logoSubtext}</span>
                            </h1>
                            <p className="logo-slogan">{t.headerSlogan}</p>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="lang-switcher" onClick={toggleLanguage}>
                            {lang === 'pl' ? '🇬🇧 EN' : '🇵🇱 PL'}
                        </button>
                        <a href={`tel:${t.headerPhone}`} className="header-phone">
                            <Phone size={20} />
                            <span>{t.headerPhone}</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h2 className="hero-title">{t.heroTitle}</h2>
                    <p className="hero-subtitle">{t.heroSubtitle}</p>
                    <p className="hero-description">{t.heroDescription}</p>
                    <a href="#contact" className="btn-hero">{t.heroBtn}</a>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="section-content">
                    <h3 className="section-title">{t.featuresTitle}</h3>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Clock size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.feature1Title}</h4>
                            <p>{t.feature1Desc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Zap size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.feature2Title}</h4>
                            <p>{t.feature2Desc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <Shield size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.feature3Title}</h4>
                            <p>{t.feature3Desc}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon-wrapper">
                                <BadgeCheck size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.feature4Title}</h4>
                            <p>{t.feature4Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services">
                <div className="section-content">
                    <h3 className="section-title">{t.servicesTitle}</h3>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon-wrapper">
                                <Home size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.service1Title}</h4>
                            <p>{t.service1Desc}</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon-wrapper">
                                <Car size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.service2Title}</h4>
                            <p>{t.service2Desc}</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon-wrapper">
                                <Lock size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.service3Title}</h4>
                            <p>{t.service3Desc}</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon-wrapper">
                                <Package size={48} strokeWidth={1.5} />
                            </div>
                            <h4>{t.service4Title}</h4>
                            <p>{t.service4Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact" id="contact">
                <div className="contact-content">
                    <h3 className="section-title">{t.contactTitle}</h3>
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
