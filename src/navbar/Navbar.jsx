import React from 'react';
import "./Navbar.css";
import too from "../assets/images/az.gif"
import { alpha, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import DropdownUser from '../dropdwonUser/DropdownUser'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: "20px",
    backgroundColor: '#dfdfdf',
    '&:active': {
      backgroundColor: '#cfcfcf',
    },
    margin: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color : "#afafaf"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
      },
      
}));


function Navbar(){
  const classes = useStyles();
  
 
  const [values, setValues] = React.useState({
    Search: '',
  });
  
  return(

    <div className={classes.root1}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
        <div className="Navbar imgs">
          <img src={too} />
          <h1 className="aaa">Dentist<span>.tn</span> </h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                className="searchInput"
                inputProps={{ 'aria-label': 'search' }}
                fullWidth
              />
            </div>
        </Grid>
        <Grid item lg={3} container spacing={1} className="user">
        
        <Grid item lg={12} >
        <div className="drop">
          <DropdownUser/>
        </div>
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default Navbar