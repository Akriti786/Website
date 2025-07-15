import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from '@mui/material';

const plans = [
  {
    name: 'Basic',
    price: '₹1499',
    features: ['2 BHK Packing', 'Local Shifting', '3 Movers'],
  },
  {
    name: 'Standard',
    price: '₹2999',
    features: ['3 BHK Packing', '25km Distance', '4 Movers + Vehicle'],
  },
  {
    name: 'Premium',
    price: '₹4999',
    features: ['Villa/Office', 'Long Distance', 'All-Inclusive Service'],
  }
];

export default function Pricing() {
  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h3" color="primary" align="center" gutterBottom>
        Pricing Plans
      </Typography>
      <Typography align="center" sx={{ mb: 5 }}>
        Choose the plan that best suits your moving needs.
      </Typography>

      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card elevation={4} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h4" color="primary">
                  {plan.price}
                </Typography>
                <ul>
                  {plan.features.map((f, i) => (
                    <li key={i}>
                      <Typography variant="body2">{f}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant="contained" href="/book">Choose Plan</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
