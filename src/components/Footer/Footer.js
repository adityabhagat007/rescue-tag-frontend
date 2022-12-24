import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" style={{  background: '#000000',
    color:'#ffff'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        rescuetag
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto', 
          background: '#000000',
          color:'#ffff'
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Sticky footer
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}