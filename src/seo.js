// Мета-данные лендинга по языкам. Используются и в Landing (document.title),
// и в scripts/prerender.js при генерации статических HTML.
import { services } from './services.js';
import { translations } from './translations.js';

export const SITE_URL = 'https://locksmithkrakow.com';

export const NOT_FOUND_TITLE = 'Nie ma takiej strony – Locksmith Kraków';

export const pageMeta = {
    pl: {
        path: '/',
        htmlLang: 'pl',
        label: 'PL',
        ogLocale: 'pl_PL',
        title: 'Ślusarz Kraków 24/7 – otwieranie drzwi i samochodów',
        description: 'Ślusarz w Krakowie 24/7: otwieranie drzwi i mieszkań, otwieranie samochodów bez uszkodzeń, regeneracja i wymiana stacyjki. Dojazd do 30 minut.',
    },
    en: {
        path: '/en',
        htmlLang: 'en',
        label: 'EN',
        ogLocale: 'en_GB',
        title: 'Locksmith Kraków 24/7 – Door & Car Opening',
        description: '24/7 locksmith in Kraków: door and apartment lockouts, car opening without damage, ignition lock repair and replacement. On site within 30 minutes.',
    },
    uk: {
        path: '/ua',
        htmlLang: 'uk',
        label: 'UA',
        ogLocale: 'uk_UA',
        title: 'Слюсар Краків 24/7 – Відкриття дверей і автомобілів',
        description: 'Слюсар у Кракові 24/7: відкриття дверей і квартир, відкриття автомобілів без пошкоджень, ремонт і заміна замка запалювання. Приїзд за 30 хвилин.',
    },
    ru: {
        path: '/ru',
        htmlLang: 'ru',
        label: 'RU',
        ogLocale: 'ru_RU',
        title: 'Слесарь Краков 24/7 – Вскрытие дверей и автомобилей',
        description: 'Слесарь в Кракове 24/7: вскрытие дверей и квартир, вскрытие автомобилей без повреждений, ремонт и замена замка зажигания. Приезд за 30 минут.',
    },
};

// Все индексируемые страницы: лендинги + страницы услуг. alternates — та же страница на других языках.
export function getAllPages() {
    const landingAlternates = Object.fromEntries(
        Object.entries(pageMeta).map(([lang, meta]) => [lang, meta.path])
    );
    const landings = Object.entries(pageMeta).map(([lang, meta]) => ({
        lang,
        path: meta.path,
        title: meta.title,
        description: meta.description,
        alternates: landingAlternates,
        faq: translations[lang].faq,
    }));
    const servicePages = Object.values(services).flatMap((service) => {
        const alternates = Object.fromEntries(
            Object.entries(service.pages).map(([lang, page]) => [lang, page.path])
        );
        return Object.entries(service.pages).map(([lang, page]) => ({
            lang,
            path: page.path,
            title: page.title,
            description: page.description,
            alternates,
            service: page,
        }));
    });
    return [...landings, ...servicePages];
}
