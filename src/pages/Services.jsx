// src/pages/Services.jsx
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const services = [
  {
    title: 'Home Shifting',
    description: 'Safe and reliable home relocation with packing, loading, transport, and unpacking.',
    image: 'https://images.unsplash.com/photo-1581090700227-1b8a5bfa3a1c?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Office Relocation',
    description: 'Quick and organized office moves to reduce downtime and ensure secure transfer.',
    image: 'https://images.unsplash.com/photo-1589578527966-26194b0f40e5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Packing & Unpacking',
    description: 'Professional-grade packing with bubble wrap, cartons, and proper labeling.',
    image: 'https://images.unsplash.com/photo-1595777214034-6c5b4a109adc?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Vehicle Transportation',
    description: 'Car and bike relocation with secure containers and live tracking.',
    image: 'https://images.unsplash.com/photo-1606636660488-b7a8ecae248c?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 10, position: 'relative' }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="sm" mx="auto">
            Professional Movers & Packers solutions — reliable, fast, and hassle-free.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card
                elevation={6}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={service.image}
                  alt={service.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
                <Box textAlign="center" sx={{ pb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/book')}
                  >
                    Book Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Floating WhatsApp Chat Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 999
        }}
      >
        <Button
          variant="contained"
          color="success"
          startIcon={<WhatsAppIcon />}
          sx={{ borderRadius: '50%', minWidth: 60, minHeight: 60 }}
          href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20moving%20service"
          target="_blank"
        />
      </Box>
    </Container>
  );
}
