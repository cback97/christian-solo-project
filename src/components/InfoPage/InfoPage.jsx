import React from 'react';
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
import { Card, CardActionArea, CardContent, CardActions, CssBaseline, Grid,  createMuiTheme, ThemeProvider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ClientHeaderComponent from '../GlobalImplementation/ClientHeaderComponent'
import { Button } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader'
import Container from '@material-ui/core/Container';
import { teal } from '@material-ui/core/colors';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const globalStyle = globalUseStyle();
  return (
    <Container style={{marginTop: 125, textAlign: 'center'}}>
    <Grid container spacing={5, 5,5,5} justify="center" alignItems="flex-end">
      <CssBaseline />
    <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
      <CardActionArea >
        <Card style={{ height: 475, backgroundColor: '#0dd0d3' }}>
          <CardHeader
            title='This app was built using the following:'
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={globalStyle.cardHeader}
          />

          <CardContent style={{ backgroundColor: '#0dd0d3' }}>
            <ul className={globalStyle.ul}>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - HTML
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - CSS
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Javascript
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - React.JS
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Axios
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Redux/ReduxSAGA
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Material-UI
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Moment.JS
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Postgres
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Express
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Node.JS
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textPrimary" align="center" >
                - Passport 
                                              </Typography>

            </ul>

          </CardContent>

        </Card>
      </CardActionArea>
    </Grid>
    </Grid>
    </Container>
  );
}

export default InfoPage;
