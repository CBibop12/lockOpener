import { Phone } from 'lucide-react';
import { pageMeta } from '../seo';
import { translations } from '../translations';
import './Landing.css';

const landingPaths = Object.fromEntries(
    Object.entries(pageMeta).map(([code, meta]) => [code, meta.path])
);

// alternates — адрес текущей страницы на каждом языке (по умолчанию — лендинги)
function SiteHeader({ lang, alternates = landingPaths }) {
    const t = translations[lang];

    return (
        <header className="landing-header">
            <div className="header-content">
                <a className="logo-container" href={pageMeta[lang].path}>
                    <div className="logo-placeholder">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className="logo-text">
                        <div className="logo">
                            {t.logoText}
                            <span className="logo-location">{t.logoSubtext}</span>
                        </div>
                        <p className="logo-slogan">{t.headerSlogan}</p>
                    </div>
                </a>
                <div className="header-actions">
                    <details className="lang-select">
                        <summary>{pageMeta[lang].label}</summary>
                        <ul className="lang-menu">
                            {Object.entries(pageMeta)
                                .filter(([code]) => code !== lang)
                                .map(([code, meta]) => (
                                    <li key={code}>
                                        <a href={alternates[code]} hrefLang={meta.htmlLang} lang={meta.htmlLang}>
                                            {meta.label}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    </details>
                    <a href={`tel:${t.headerPhone.replace(/\s/g, '')}`} className="header-phone">
                        <Phone size={20} />
                        <span>{t.headerPhone}</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
