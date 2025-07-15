import { Box, Typography, Button, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import useAuth from '../auth/useAuth';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: 500 }}
      >
        <Paper elevation={8} sx={{ p: 4, borderRadius: 4 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mx: 'auto',
                bgcolor: 'primary.main',
                fontSize: 32,
              }}
            >
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </Avatar>

            <Typography
              variant="h4"
              sx={{
                mt: 2,
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #007BFF, #00C6FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Welcome {user?.name || 'User'}!
            </Typography>

            <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
              Email: {user?.email}
            </Typography>

            {/* <Button
              variant="contained"
              color="error"
              onClick={logout}
              sx={{ mt: 4, px: 4, fontWeight: 'bold' }}
            >
              Logout
            </Button> */}
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
