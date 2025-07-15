// src/pages/About.jsx
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Akriti',
    role: 'Developer',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Rohan Mehta',
    role: 'Backend Engineer',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Sneha Patel',
    role: 'UI/UX Designer',
    image: 'https://via.placeholder.com/150'
  }
];

export default function About() {
  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          About Us
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 800, mb: 5 }}>
          We are a passionate team of developers dedicated to building intuitive,
          user-friendly, and scalable web applications. Our mission is to deliver
          quality software that solves real-world problems.
        </Typography>

        {/* Company mission section */}
        <Box sx={{ bgcolor: '#f9f9f9', p: 4, borderRadius: 3, mb: 5 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Our Mission
          </Typography>
          <Typography>
            Empower businesses and individuals through cutting-edge digital solutions,
            seamless user experiences, and robust backend architecture.
          </Typography>
        </Box>

        {/* Team members */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Meet the Team
        </Typography>

        <Grid container spacing={4}>
          {team.map((member, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card elevation={4} sx={{ textAlign: 'center', borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
