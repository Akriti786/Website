// src/App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './layout/Layout';
import PrivateRoute from './routes/PrivateRoute';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export default function App() {
  /** createBrowserRouter lives right here in App.jsx */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {/* public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* protected page */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
