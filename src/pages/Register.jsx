import { useState } from 'react';
import {
  Container, Box, TextField, Button, Typography, Link
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4">Register</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField fullWidth margin="normal" label="Name" name="name" onChange={handleChange} />
          <TextField fullWidth margin="normal" label="Email" name="email" onChange={handleChange} />
          <TextField fullWidth margin="normal" type="password" label="Password" name="password" onChange={handleChange} />
          <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>Sign Up</Button>
          <Link component={RouterLink} to="/login" sx={{ display: 'block', mt: 2 }}>
            Already have an account? Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
