import { useEffect } from 'react';
import { Phone, ChevronRight } from 'lucide-react';
import SiteHeader from './SiteHeader';
import { serviceIcons } from './serviceIcons';
import { pageMeta } from '../seo';
import { services, serviceUi } from '../services';
import { translations } from '../translations';
import './ServicePage.css';

function ServicePage({ service, lang }) {
    const page = services[service].pages[lang];
    const ui = serviceUi[lang];
    const t = translations[lang];
    const homePath = pageMeta[lang].path;
    const phoneHref = `tel:${t.headerPhone.replace(/\s/g, '')}`;
    const alternates = Object.fromEntries(
        Object.entries(services[service].pages).map(([code, p]) => [code, p.path])
    );
    const otherServices = Object.keys(services).filter((key) => key !== service);

    // Нужно при клиентской навигации; при прямом заходе head уже отрендерен prerender'ом
    useEffect(() => {
        document.title = page.title;
        document.documentElement.lang = pageMeta[lang].htmlLang;
    }, [page, lang]);

    const callButton = (
        <a href={phoneHref} className="service-btn service-btn-primary">
            <Phone size={20} />
            <span>{ui.call}: {t.headerPhone}</span>
        </a>
    );
    const orderButton = (
        <a href={`${homePath}#contact`} className="service-btn service-btn-secondary">
            {ui.order}
        </a>
    );

    return (
        <div className="service-page">
            <SiteHeader lang={lang} alternates={alternates} />

            <section className="service-hero">
                <div className="service-hero-content">
                    <nav className="breadcrumbs" aria-label="breadcrumb">
                        <a href={homePath}>{ui.home}</a>
                        <ChevronRight size={16} aria-hidden="true" />
                        <span aria-current="page">{page.name}</span>
                    </nav>
                    <h1>{page.h1}</h1>
                    <p className="service-lead">{page.lead}</p>
                    <div className="service-actions">
                        {callButton}
                        {orderButton}
                    </div>
                </div>
            </section>

            <article className="service-body">
                {page.sections.map((section) => (
                    <section key={section.heading} className="service-section">
                        <h2>{section.heading}</h2>
                        {section.list && (
                            <ul>
                                {section.list.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        )}
                        {section.paragraphs?.map((text) => <p key={text}>{text}</p>)}
                        {section.link && (
                            <a className="service-inline-link" href={services[section.link.to].pages[lang].path}>
                                {section.link.label} →
                            </a>
                        )}
                    </section>
                ))}
                <section className="service-section">
                    <h2>{ui.stepsTitle}</h2>
                    <ol className="service-steps">
                        {ui.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                </section>
            </article>

            <section className="service-others">
                <h2>{ui.otherServices}</h2>
                <div className="service-others-grid">
                    {otherServices.map((key) => {
                        const other = services[key].pages[lang];
                        const Icon = serviceIcons[services[key].icon];
                        return (
                            <a key={key} className="service-other-card" href={other.path}>
                                <Icon size={32} strokeWidth={1.5} />
                                <span>{other.name}</span>
                            </a>
                        );
                    })}
                </div>
            </section>

            <section className="service-cta">
                <h2>{ui.ctaTitle}</h2>
                <p>{ui.ctaText}</p>
                <div className="service-actions">
                    {callButton}
                    {orderButton}
                </div>
            </section>

            <footer className="landing-footer">
                <p>{t.footerText}</p>
            </footer>
        </div>
    );
}

export default ServicePage;
