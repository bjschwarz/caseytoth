'use client';
import { Courier_Prime } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { Height } from '@mui/icons-material';

const courier = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});


const theme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#272727'
    },
    background: {
      default: '#f6f6f6'
    },
    text: {
      default: '#272727',
      contrastText: "f6f6f6"
    },
    primary: {
      light: '#4b4b4b',
      main: '#f6f6f6',
      dark: '#4b4b4b',
      contrastText: '#272727',
    },
    secondary: {
      light: '#272727',
      main: '#000',
      dark: '#555',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: courier.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: theme.palette.primary.light,
          }),
        }),
      },
    },
  },
});

export default theme;
