import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Ballot as TicketIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Home from './components/Home';
import PastResults from './components/PastResults';
import NumberPicker from './components/NumberPicker';
import Analysis from './components/Analysis';

// Styled Components
const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1E90FF',
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
}));

const IconStyled = styled(TicketIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const Content = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const Footer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: 'auto',
  backgroundColor: theme.palette.grey[200],
  textAlign: 'center',
}));

const App: React.FC = () => {
  return (
    <Router>
      <Root>
        <AppBarStyled position="static">
          <Toolbar>
            <Title variant="h6">
              <IconStyled />
              LottoVerse
            </Title>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/past-results">
              Past Results
            </Button>
            <Button color="inherit" component={Link} to="/number-picker">
              Number Picker
            </Button>
            <Button color="inherit" component={Link} to="/analysis">
              Analysis
            </Button>
          </Toolbar>
        </AppBarStyled>

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past-results" element={<PastResults />} />
            <Route path="/number-picker" element={<NumberPicker />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </Content>

        <Footer>
          <Typography variant="body2" color="textSecondary">
            © 2025 LottoVerse. All rights reserved.
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Disclaimer: This website is for entertainment purposes only. Please play responsibly.
          </Typography>
        </Footer>
      </Root>
    </Router>
  );
};

export default App;
