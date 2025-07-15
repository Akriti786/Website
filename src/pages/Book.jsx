import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Paper
} from '@mui/material';
import { useState } from 'react';

const services = [
  'Home Shifting',
  'Office Relocation',
  'Packing & Unpacking',
  'Vehicle Transportation'
];

export default function Book() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
    setForm({ name: '', email: '', phone: '', address: '', service: '', date: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={5} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Book a Service
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            select
            label="Service Type"
            name="service"
            value={form.service}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          >
            {services.map((option, i) => (
              <MenuItem key={i} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Preferred Date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Confirm Booking
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
