import React from "react";
import too from "../../assets/images/az.gif";
import classes from "./GuestLayout.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Login} from "../../screens/Login";
import Navbar from '../../navbar/Navbar';
import bg from "../../assets/images/bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 'flex',
  },
  fix: {
    backgrounColor:'blue',
  }
}));

export default function GuestLayout() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>

        <Grid container item xs={12}>
           
          <Grid item xs={12} sm={3}>
            <div className="Navbar imgs">
              <img src={too} />
              <h1 className="aaa">Dentist<span>.tn</span> </h1>
            </div>
          </Grid> 
         <Grid item xs={12} sm={9}>      
         </Grid>                    
         <Grid  className="bg" item xs={12} sm={7}>
          <img src={bg} />  
          </Grid>
          <Grid item xs={12} sm={5}>
            <Login/>
          </Grid>
        </Grid>
    </div>
  );
}