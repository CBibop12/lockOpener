import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import ServicePage from './components/ServicePage';
import NotFound from './components/NotFound';
import { services } from './services';
import './App.css';

// Служебные страницы грузятся отдельными чанками, чтобы не утяжелять лендинг.
// Landing, ServicePage и NotFound пререндерятся, поэтому импортируются синхронно.
const OrderForm = lazy(() => import('./components/OrderForm'));
const OrderView = lazy(() => import('./components/OrderView'));
const OrderSuccess = lazy(() => import('./components/OrderSuccess'));
const AdminPanel = lazy(() => import('./components/AdminPanel'));

const withSuspense = (element) => <Suspense fallback={null}>{element}</Suspense>;

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing lang="pl" />} />
      <Route path="/en" element={<Landing lang="en" />} />
      <Route path="/ua" element={<Landing lang="uk" />} />
      <Route path="/ru" element={<Landing lang="ru" />} />
      {Object.entries(services).flatMap(([key, service]) =>
        Object.entries(service.pages).map(([lang, page]) => (
          <Route key={page.path} path={page.path} element={<ServicePage service={key} lang={lang} />} />
        ))
      )}
      <Route path="/order" element={withSuspense(<OrderForm />)} />
      <Route path="/orders/:id" element={withSuspense(<OrderView />)} />
      <Route path="/order-success" element={withSuspense(<OrderSuccess />)} />
      <Route path="/moonpanel-473" element={withSuspense(<AdminPanel />)} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
