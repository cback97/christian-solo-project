import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bbdefb',
    },
    secondary: {
      main: '#00bfa5',
    },

  }
})

const CancelButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button size='large' variant='contained' color="secondary">
        Cancel
    </Button>
    </ThemeProvider>
  );
};

export default CancelButton;