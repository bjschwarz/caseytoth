
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';

export default function Copyright() {
  return (

    <Box >
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
          Casey Toth
        {' '}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}