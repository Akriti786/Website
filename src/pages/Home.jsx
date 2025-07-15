// src/pages/Home.jsx
import { Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3">Home Page</Typography>
      <Typography>This is the homepage content.</Typography>
    </Container>
  );
}
