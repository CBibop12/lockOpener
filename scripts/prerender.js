// Пререндер индексируемых страниц в статический HTML после `vite build`.
// Лендинги (dist/index.html, dist/en|ua|ru/index.html) и страницы услуг — с контентом и своим <head>;
// список страниц — getAllPages() из src/seo.js, тексты услуг — src/services.js;
// dist/sitemap.xml — генерируется из того же списка;
// dist/app.html — пустая SPA-оболочка с noindex для служебных роутов (см. vercel.json).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE_URL, pageMeta, getAllPages, NOT_FOUND_TITLE } from '../src/seo.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

// Заменяет ровно одно вхождение — если тег в index.html переименуют, сборка упадёт, а не молча сломает SEO
function replaceOnce(html, pattern, replacement) {
    const matches = html.match(new RegExp(pattern.source, 'g')) || [];
    if (matches.length !== 1) {
        throw new Error(`prerender: expected exactly one match for ${pattern}, found ${matches.length}`);
    }
    return html.replace(pattern, replacement);
}

function setHead(html, meta) {
    const url = SITE_URL + meta.path;
    const title = escapeAttr(meta.title);
    const description = escapeAttr(meta.description);
    const replacements = [
        [/<html lang="[^"]*">/, `<html lang="${meta.htmlLang}">`],
        [/<title>[^<]*<\/title>/, `<title>${title}</title>`],
        [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`],
        [/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`],
        [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`],
        [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`],
        [/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${meta.ogLocale}" />`],
        [/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${url}" />`],
        [/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`],
        [/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`],
        [/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`],
    ];
    return replacements.reduce((acc, [pattern, value]) => replaceOnce(acc, pattern, value), html);
}

// description в LocalBusiness из index.html — на языке страницы (отступ в 6 пробелов отличает его от description у Offer)
function setBusinessDescription(html, description) {
    return replaceOnce(html, /\n {6}"description": "[^"]*",/, () => `\n      "description": ${JSON.stringify(description)},`);
}

// hreflang-ссылки на ту же страницу на всех языках; x-default — польская версия
function getAlternates(page) {
    return [
        ...Object.entries(page.alternates).map(([lang, href]) => ({ hreflang: pageMeta[lang].htmlLang, href: SITE_URL + href })),
        { hreflang: 'x-default', href: SITE_URL + page.alternates.pl },
    ];
}

function setAlternates(html, alternates) {
    const tags = alternates
        .map(({ hreflang, href }) => `<link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
        .join('\n  ');
    const withoutOld = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" [^>]*\/>/g, '');
    return replaceOnce(withoutOld, /(<link rel="canonical" [^>]*\/>)/, `$1\n  ${tags}`);
}

// Service + BreadcrumbList для страницы услуги; provider ссылается на LocalBusiness из index.html по @id
function serviceJsonLd(page) {
    const url = SITE_URL + page.path;
    const homeUrl = SITE_URL + pageMeta[page.lang].path;
    const data = [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: page.service.name,
            description: page.description,
            url,
            inLanguage: pageMeta[page.lang].htmlLang,
            provider: { '@id': SITE_URL },
            areaServed: { '@type': 'City', name: 'Kraków' },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Locksmith Kraków', item: homeUrl },
                { '@type': 'ListItem', position: 2, name: page.service.name, item: url },
            ],
        },
    ];
    return toJsonLdScript(data);
}

function toJsonLdScript(data) {
    // \u003c не даёт тексту закрыть <script> раньше времени
    const json = JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
    return `  <script type="application/ld+json">\n${json}\n  </script>\n`;
}

// FAQPage для лендингов — тот же текст, что в видимом блоке FAQ
function faqJsonLd(page) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: pageMeta[page.lang].htmlLang,
        mainEntity: page.faq.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
        })),
    };
    return toJsonLdScript(data);
}

const pages = getAllPages();

for (const page of pages) {
    const meta = { ...pageMeta[page.lang], path: page.path, title: page.title, description: page.description };
    let html = setAlternates(setHead(template, meta), getAlternates(page));
    html = setBusinessDescription(html, pageMeta[page.lang].description);
    if (page.service) {
        html = replaceOnce(html, /<\/head>/, `${serviceJsonLd(page)}</head>`);
    }
    if (page.faq) {
        html = replaceOnce(html, /<\/head>/, `${faqJsonLd(page)}</head>`);
    }
    html = replaceOnce(html, /<div id="root"><\/div>/, `<div id="root">${render(page.path)}</div>`);
    const outFile = path.join(distDir, page.path, 'index.html');
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, html);
    console.log(`prerender: ${page.path} -> ${path.relative(root, outFile)}`);
}

// Не индексируется и не претендует на canonical главной
function makeNoindex(html) {
    let result = replaceOnce(html, /<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, nofollow" />');
    result = replaceOnce(result, /\s*<link rel="canonical" [^>]*\/>/, '');
    return result.replace(/\s*<link rel="alternate" hreflang="[^"]*" [^>]*\/>/g, '');
}

// Оболочка для /order, /orders/:id и т.п. (см. vercel.json)
fs.writeFileSync(path.join(distDir, 'app.html'), makeNoindex(template));
console.log('prerender: app shell -> dist/app.html');

// Vercel отдаёт dist/404.html со статусом 404 для всех неизвестных адресов
let notFound = makeNoindex(template);
notFound = replaceOnce(notFound, /<title>[^<]*<\/title>/, `<title>${escapeAttr(NOT_FOUND_TITLE)}</title>`);
notFound = replaceOnce(notFound, /<div id="root"><\/div>/, `<div id="root">${render('/__not-found__')}</div>`);
fs.writeFileSync(path.join(distDir, '404.html'), notFound);
console.log('prerender: 404 -> dist/404.html');

const sitemapUrls = pages
    .map((page) => {
        const links = getAlternates(page)
            .map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
            .join('\n');
        return `  <url>\n    <loc>${SITE_URL + page.path}</loc>\n${links}\n  </url>`;
    })
    .join('\n');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls}
</urlset>
`);
console.log('prerender: sitemap -> dist/sitemap.xml');

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
