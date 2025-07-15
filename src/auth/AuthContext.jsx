import { createContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { getToken, setToken, clearToken } from './token';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);    // app boot loading
  const [busy, setBusy] = useState(false);         // login/register spinner

  /* -------------- LOGIN -------------- */
  const login = async (email, password) => {
    setBusy(true);
    try {
      const { data } = await api.post('/auth/login', { email, password });
      setToken(data.token);
      setUser(data.user);
      toast.success(`Welcome back, ${data.user.name || 'User'}!`);
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      toast.error(msg);
      throw err;
    } finally {
      setBusy(false);
    }
  };

  /* -------------- REGISTER -------------- */
  const register = async (formData) => {
    setBusy(true);
    try {
      const { data } = await api.post('/auth/register', formData);
      setToken(data.token);
      setUser(data.user);
      toast.success(`Account created: ${data.user.name || 'User'}`);
    } catch (err) {
      const msg = err.response?.data?.message || 'Registration failed';
      toast.error(msg);
      throw err;
    } finally {
      setBusy(false);
    }
  };

  /* -------------- LOGOUT -------------- */
  const logout = () => {
    clearToken();
    setUser(null);
    toast.info('You have been logged out.');
  };

  /* -------------- FETCH USER ON LOAD -------------- */
  useEffect(() => {
    const boot = async () => {
      const token = getToken();
      if (!token) return setLoading(false);

      try {
        const { data } = await api.get('/auth/me');
        setUser(data.user);
      } catch (err) {
        clearToken();
        toast.warn('Session expired. Please log in again.');
      } finally {
        setLoading(false);
      }
    };
    boot();
  }, []);

  /* -------------- CONTEXT VALUE -------------- */
  return (
    <AuthContext.Provider value={{ user, busy, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
