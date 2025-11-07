import { useState } from 'react';
import { Lock, User, AlertCircle } from 'lucide-react';
import { getApiUrl } from '../config/api.js';
import './AdminLogin.css';

function AdminLogin({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Проверяем учетные данные через API
            const response = await fetch(`${getApiUrl()}/admin/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${username}:${password}`)}`
                }
            });

            if (response.ok) {
                // Сохраняем учетные данные в localStorage
                localStorage.setItem('adminBasicUser', username);
                localStorage.setItem('adminBasicPassword', password);
                onLogin();
            } else {
                setError('Nieprawidłowy login lub hasło');
            }
        } catch (err) {
            setError('Błąd połączenia z serwerem');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-card">
                <div className="admin-login-header">
                    <Lock size={48} className="login-icon" />
                    <h1>Panel administracyjny</h1>
                    <p>Wprowadź dane dostępowe</p>
                </div>

                <form onSubmit={handleSubmit} className="admin-login-form">
                    {error && (
                        <div className="login-error">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="form-group">
                        <label>
                            <User size={18} />
                            <span>Login</span>
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoFocus
                            placeholder="Wprowadź login"
                        />
                    </div>

                    <div className="form-group">
                        <label>
                            <Lock size={18} />
                            <span>Hasło</span>
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Wprowadź hasło"
                        />
                    </div>

                    <button type="submit" className="btn-login" disabled={loading}>
                        {loading ? 'Sprawdzanie...' : 'Zaloguj się'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;

