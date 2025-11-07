import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Добавление токена и базовой авторизации для админ-запросов
api.interceptors.request.use((config) => {
    // Для админских эндпоинтов добавляем базовую авторизацию из localStorage
    if (config.url?.includes('/orders/all') ||
        config.url?.includes('/orders/create') ||
        (config.url?.includes('/orders/') && config.method === 'delete') ||
        (config.url?.includes('/orders/') && config.method === 'post' && config.url?.includes('/mark-done')) ||
        config.url?.includes('/admin/')) {
        const username = localStorage.getItem('adminBasicUser');
        const password = localStorage.getItem('adminBasicPassword');
        if (username && password) {
            const credentials = btoa(`${username}:${password}`);
            config.headers.Authorization = `Basic ${credentials}`;
        }
    } else {
        // Для остальных запросов используем Bearer токен
        const token = localStorage.getItem('adminToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
});

// Обработка ошибок - НЕ перехватываем 401 для базовой авторизации
// Браузер сам обработает диалог авторизации через встроенный механизм
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Для всех ошибок просто пробрасываем дальше
        // Браузер сам обработает 401 для базовой авторизации
        return Promise.reject(error);
    }
);

// API для заказов
export const ordersAPI = {
    create: (data) => api.post('/orders', data),
    getByToken: (id, token) => api.get(`/orders/${id}?token=${token}`),
    getPublicStatus: (id) => api.get(`/orders/${id}/status-public`),
    getAllOrders: () => api.get('/orders/all'),
    markAsDone: (id) => api.post(`/orders/${id}/mark-done`),
    createOrder: (data) => api.post('/orders/create', data), // Для админки
    deleteOrder: (id) => api.delete(`/orders/${id}/delete`), // Для админки
};

// API для админ-панели
export const adminAPI = {
    getOrders: (params) => api.get('/admin/orders', { params }),
    createOrder: (data) => api.post('/admin/orders', data),
    getOrder: (id) => api.get(`/admin/orders/${id}`),
    assignTechnician: (id, techId, eta) =>
        api.post(`/admin/orders/${id}/assign`, { techId, eta }),
    updateStatus: (id, status, finalPrice) =>
        api.post(`/admin/orders/${id}/status`, { status, finalPrice }),
    updateOrder: (id, data) => api.put(`/admin/orders/${id}`, data),
    deleteOrder: (id) => api.delete(`/admin/orders/${id}`),
};

// API для аутентификации
export const authAPI = {
    login: (username, password) => api.post('/auth/login', { username, password }),
    getCurrentUser: () => api.get('/auth/me'),
};

export default api;

