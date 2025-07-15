// src/components/Footer.jsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ p: 2, mt: 4, textAlign: 'center', bgcolor: '#f0f0f0' }}>
      <Typography variant="body2">© 2025 My Website. All rights reserved.</Typography>
    </Box>
  );
}
