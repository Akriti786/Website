// src/pages/Contact.jsx
import { Container, Typography, TextField, Button, Box } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Contact Us</Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField fullWidth label="Name" margin="normal" />
        <TextField fullWidth label="Email" margin="normal" />
        <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }}>Send Message</Button>
      </Box>
    </Container>
  );
}
