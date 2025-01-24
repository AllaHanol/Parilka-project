// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito Sans', Arial, sans-serif", // шрифт
    h1: {
      fontWeight: 700,
      fontSize: '36px'
    },
    
    h6: {
      fontWeight: 400,
      fontSize: '16px'
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 800,
      fontSize: '16px'
    },
  },
});

export default theme;
