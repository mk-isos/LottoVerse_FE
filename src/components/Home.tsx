import React from 'react';
import { Typography, Button, styled } from '@mui/material';

const Section = styled('section')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
}));

const Numbers = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: theme.spacing(2, 0),
}));

const Number = styled('div')(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: theme.spacing(0, 1),
  fontWeight: 'bold',
  fontSize: '1.2rem',
}));

const Powerball = styled(Number)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
}));

const Home: React.FC = () => {
  return (
    <div>
      <Section>
        <Typography variant="h4" gutterBottom>
          Today's Powerball
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Draw Date: January 2, 2025
        </Typography>
        <Numbers>
          {[3, 15, 27, 35, 44].map((number, index) => (
            <Number key={index} style={{ backgroundColor: '#FFD700' }}>
              {number}
            </Number>
          ))}
          <Powerball>9</Powerball>
        </Numbers>
        <Typography variant="h6" gutterBottom>
          Jackpot: $350 Million
        </Typography>
        <Typography variant="body1">Next Draw: January 5, 2025</Typography>
      </Section>

      <div style={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" size="large">
          Get Lucky Numbers
        </Button>
      </div>
    </div>
  );
};

export default Home;
