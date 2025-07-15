// src/routes/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // You can show a spinner here

  return user ? children : <Navigate to="/login" replace />;
}
