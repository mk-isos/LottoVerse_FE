import React from 'react';
import { Typography } from '@mui/material';

const PastResults: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Past Results
      </Typography>
      <Typography variant="body1">
        Past lottery results will be displayed here.
      </Typography>
    </div>
  );
};

export default PastResults;
