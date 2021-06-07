import React from 'react';
import globalUseStyle from '../GlobalImplementation/globalUseStyles';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const globalStyle = globalUseStyle();
  return (
    <Grid container spacing={5} justify="center" alignItems="flex-end">
    <Grid item xs={12} sm={6} md={4} className={globalStyle.card}>
      <CardActionArea onClick={Assessment}>
        <Card style={{ height: 250, backgroundColor: '#0dd0d3' }}>
          <CardHeader
            title='Weekly Check-in'
            titleTypographyProps={{ align: 'center' }}
            subheaderTypographyProps={{ align: 'center' }}
            className={globalStyle.cardHeader}
          />

          <CardContent style={{ backgroundColor: '#0dd0d3' }}>
            <div className={globalStyle.cardBody}>
              <Typography variant="subtitle1" color="textSecondary" component="p">
                In this section, you will be filling out three forms.
                                              </Typography>
            </div>
            <ul className={globalStyle.ul}>
              <Typography component="li" variant="subtitle1"  color="textSecondary" align="center" >
                - PHQ 9 Questionnaire
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textSecondary" align="center" >
                - GAD 7 Questionnaire
                                              </Typography>
              <Typography component="li" variant="subtitle1"  color="textSecondary" align="center" >
                - Weekly Reflection (max of 500char.)
                                              </Typography>

            </ul>

          </CardContent>

        </Card>
      </CardActionArea>
    </Grid>
    </Grid>
  );
}

export default InfoPage;
