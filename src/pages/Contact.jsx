// src/pages/Contact.jsx
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper
} from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could integrate an API call or email service
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>

          <Typography sx={{ mb: 3 }}>
            We'd love to hear from you. Please fill out the form below and we’ll get back to you soon.
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Your Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Box>

          {submitted && (
            <Typography variant="body2" color="success.main" sx={{ mt: 3 }}>
              ✅ Your message has been sent!
            </Typography>
          )}
        </Paper>
      </motion.div>
    </Container>
  );
}
