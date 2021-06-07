import { makeStyles } from '@material-ui/core';
const globalUseStyle = makeStyles((theme) => ({
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(9),
    marginTop: theme.spacing(2),
  
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'center',
    width: 1200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: '10px 10px 12px 5px rgba(0,0,0,0.56)',
    padding: theme.spacing(2, 4, 3),
    marginTop: theme.spacing(6)
  },
  contentWrapper: {
    maxWidth: 1280,
    width: '100%',
    background: theme.palette.background.default,
    margin: theme.spacing(1),
  },
  headerArea: {
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '55%',
    marginTop: theme.spacing(1),
  },
  reflection: {
    margin: theme.spacing(3),
    width: '45ch'
  }, 
   fname: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(5)
  },
  navCard:{

    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  
  },
  midNavCard:{

    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3)
  }, editButton: {
    marginBottom: theme.spacing(4),
   
  }, 
  card:{
      height: "100%", 
  },
  cardHeader:{
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardBody:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  marginBottom: theme.spacing(2),
},
pageHeader: {
  padding: theme.spacing(8, 0, 6),
},
pageSubHeader:{
  padding: theme.spacing(0, 0, 6),
},
ul: {
  margin: 0,
  padding: 0,
  padding: theme.spacing(0, 0, 2),
  listStyle: 'none',
}
}));

export default globalUseStyle;

