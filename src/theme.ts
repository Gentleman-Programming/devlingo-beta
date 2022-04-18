import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
      width: 'auto',
      height: 'auto'
    }
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '.3rem'
          }
        }
      ]
    }
  }
});

export default theme;
