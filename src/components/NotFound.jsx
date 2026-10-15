import { useEffect } from 'react';
import { Phone } from 'lucide-react';
import SiteHeader from './SiteHeader';
import { serviceIcons } from './serviceIcons';
import { pageMeta, NOT_FOUND_TITLE } from '../seo';
import { services } from '../services';
import { translations } from '../translations';
import './ServicePage.css';
import './NotFound.css';

// Язык по неизвестному URL не определить — основной текст на польском, ниже короткие строки на других языках
const otherLanguages = [
    { lang: 'en', text: 'Page not found.', link: 'Go to the English home page' },
    { lang: 'uk', text: 'Сторінку не знайдено.', link: 'Перейти на українську версію' },
    { lang: 'ru', text: 'Страница не найдена.', link: 'Перейти на русскую версию' },
];

function NotFound() {
    const t = translations.pl;
    const phoneHref = `tel:${t.headerPhone.replace(/\s/g, '')}`;

    useEffect(() => {
        document.title = NOT_FOUND_TITLE;
    }, []);

    return (
        <div className="service-page">
            <SiteHeader lang="pl" />

            <section className="service-hero not-found-hero">
                <div className="service-hero-content">
                    <p className="not-found-code">404</p>
                    <h1>Nie ma takiej strony</h1>
                    <p className="service-lead">
                        Ta strona nie istnieje albo została przeniesiona. Ale jeśli masz problem z zamkiem – pomożemy 24/7 w całym Krakowie.
                    </p>
                    <div className="service-actions">
                        <a href={phoneHref} className="service-btn service-btn-primary">
                            <Phone size={20} />
                            <span>Zadzwoń: {t.headerPhone}</span>
                        </a>
                        <a href={pageMeta.pl.path} className="service-btn service-btn-secondary">
                            Strona główna
                        </a>
                    </div>
                </div>
            </section>

            <section className="service-others not-found-services">
                <h2>Nasze usługi</h2>
                <div className="service-others-grid">
                    {Object.entries(services).map(([key, service]) => {
                        const Icon = serviceIcons[service.icon];
                        return (
                            <a key={key} className="service-other-card" href={service.pages.pl.path}>
                                <Icon size={32} strokeWidth={1.5} />
                                <span>{service.pages.pl.name}</span>
                            </a>
                        );
                    })}
                </div>

                <ul className="not-found-languages">
                    {otherLanguages.map(({ lang, text, link }) => (
                        <li key={lang} lang={pageMeta[lang].htmlLang}>
                            {text} <a href={pageMeta[lang].path} hrefLang={pageMeta[lang].htmlLang}>{link} →</a>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="landing-footer">
                <p>{t.footerText}</p>
            </footer>
        </div>
    );
}

export default NotFound;
