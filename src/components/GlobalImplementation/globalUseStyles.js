import { makeStyles } from '@material-ui/core';
const globalUseStyle = makeStyles((theme) => ({
  btnArea: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: theme.spacing(1),
  },
  input: {
    marginBottom: theme.spacing(9),
    marginTop: theme.spacing(2)
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
  
}));

export default globalUseStyle;