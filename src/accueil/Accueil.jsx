import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './../navbar/Navbar'
import Compte from '../compte/Compte';
import Dashboard from '../dashboard/Dashboard';
import  Menu from '../menu/Menu';
import ChartUser from "../chartuser/ChartUser";
import ChartPhar from "../charpharma/CharPharma";
import ChartStock from "../chartstock/ChartStock";
import Prescription from "../prescription/Prescription";
import Appointments from "../calendar/Calendar";
import CompUp from "../compteupdate/CompteUpdate";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Acceuil() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={1}>
       
        <Grid item xs={12} sm={12}>
          <Dashboard />
        </Grid>

      </Grid>
    </div>
  );
}