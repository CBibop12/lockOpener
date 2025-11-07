import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import OrderForm from './components/OrderForm';
import OrderView from './components/OrderView';
import OrderSuccess from './components/OrderSuccess';
import AdminPanel from './components/AdminPanel';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/orders/:id" element={<OrderView />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/moonpanel-473" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
