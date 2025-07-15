import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" color="primary" sx={{ mb: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left: Logo or Site Title */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
            fontSize: '1.4rem',
          }}
        >
          Movers & Packers
        </Typography>

        {/* Center: Navigation Links */}
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>


          {user && (
            <>
              <Button color="inherit" component={Link} to="/pricing">Pricing</Button>
              <Button color="inherit" component={Link} to="/book">Book</Button>
              <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
            </>
          )}
        </Stack>

        {/* Right: Auth Buttons */}
        <Stack direction="row" spacing={2} alignItems="center">
          {user && (
            <Typography variant="body2" sx={{ color: 'white' }}>
              Hi, {user.name || user.email}
            </Typography>
          )}

          {user ? (
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleLogout}
              sx={{
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'primary.main',
                }
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="inherit"
              component={Link}
              to="/login"
              sx={{
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'primary.main',
                }
              }}
            >
              Login
            </Button>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
