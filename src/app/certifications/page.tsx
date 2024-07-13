'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

export default function Page() {
  return (
    <Box component="main" sx={{ px: 5, py: 3, fontSize: '2rem' }}>
      <Toolbar />
      <Typography>Certifications view</Typography>
    </Box>
  );
}
