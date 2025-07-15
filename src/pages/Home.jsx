// src/pages/Home.jsx
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 6,
          p: 4,
          background: 'linear-gradient(to right, #2196f3, #21cbf3)',
          borderRadius: 3,
          color: 'white',
        }}
      >
        <Typography variant="h3" gutterBottom fontWeight="bold">
          Welcome to Movers & Packers
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Safe. Fast. Reliable. Your moving partner across the city and beyond.
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => navigate('/book')}
        >
          Book Your Move
        </Button>
      </Box>

      {/* Services Preview */}
      <Typography variant="h4" textAlign="center" gutterBottom>
        Our Top Services
      </Typography>
      <Grid container spacing={4} mt={2}>
        {[
          {
            title: 'Home Shifting',
            desc: 'Quick and damage-free house relocation services.',
            image: 'https://images.unsplash.com/photo-1581092787766-89c8adf5b5d2'
          },
          {
            title: 'Office Relocation',
            desc: 'Efficient corporate move solutions.',
            image: 'https://images.unsplash.com/photo-1592861956120-7b49ad3a8d61'
          },
          {
            title: 'Vehicle Transport',
            desc: 'Two-wheeler and car shifting with full protection.',
            image: 'https://images.unsplash.com/photo-1558980664-10e7170cfb0e'
          },
        ].map((service, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="180"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box textAlign="center" mt={8}>
        <Typography variant="h5" gutterBottom>
          Ready to move?
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/services')}
        >
          Explore All Services
        </Button>
      </Box>
    </Container>
  );
}
