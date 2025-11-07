/**
 * Централизованная конфигурация API
 */
export const getApiUrl = () => {
    // Проверяем переменную окружения (приоритет)
    if (import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL;
    }

    // Для production (не localhost) используем Heroku URL
    const isProduction = window.location.hostname !== 'localhost' &&
        window.location.hostname !== '127.0.0.1' &&
        !window.location.hostname.startsWith('192.168.');

    if (isProduction) {
        return 'https://lockopener-1ab529db3409.herokuapp.com/api';
    }

    // Для разработки используем localhost
    return 'http://localhost:3001/api';
};

