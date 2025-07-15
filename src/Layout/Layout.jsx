import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Layout() {
  return (
    <Box>
      <Navbar />
      <Box component="main" sx={{ minHeight: '80vh', px: 2 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
