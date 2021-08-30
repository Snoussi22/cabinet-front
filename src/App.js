import React from 'react';
import GuestLayout from './components/GuestLayout/GuestLayout';
import Acceuil from './accueil/Accueil';
import './App.css';
import Navbar from './navbar/Navbar';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import  Menu from './menu/Menu';
import Compte from './compte/Compte';
import Calendar from './calendar/Calendar';
import Prescription from './prescription/Prescription';
import ComptUp from './compteupdate/CompteUpdate';
import StatMedicaments from './charpharma/CharPharma';
import StatUser from './chartuser/ChartUser';
import StatStock from './chartstock/ChartStock';
import Stock from './stock/Stock';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



function App() {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
      <Route exact path='/Logout'>
                  <Grid   xs={12}>
                    <GuestLayout/>
                  </Grid>
      </Route>
      <Route exact path=''>
      <Navbar />
          <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={12} lg={2}>
              <Menu />
            </Grid>
            <Switch>
              <Route exact path='/'>
                  <Grid   xs={7}>
                    <Acceuil/>
                  </Grid>
              </Route>
              <Route exact path='/Appointment'>
                  <Grid   xs={7}>
                    <Calendar/>
                  </Grid>
              </Route>
              <Route exact path='/Prescription'>
                  <Grid   xs={7}>
                    <Prescription/>
                  </Grid>
              </Route>
              <Route exact path='/Compte'>
                  <Grid   xs={7}>
                    <ComptUp/>
                  </Grid>
              </Route>
              <Route exact path='/MedStat'>
                  <Grid   xs={7}>
                    <StatMedicaments/>
                  </Grid>
              </Route>
              <Route exact path='/UseStat'>
                  <Grid   xs={7}>
                    <StatUser/>
                  </Grid>
              </Route>
              <Route exact path='/StoStat'>
                  <Grid   xs={7}>
                    <StatStock/>
                  </Grid>
              </Route>
              <Route exact path='/Stock'>
                  <Grid   xs={7}>
                    <Stock/>
                  </Grid>
              </Route>
            </Switch>
            <Grid item xs={12} sm={3}>
          <Compte/>
        </Grid>
            </Grid>
          </div>   
      </Route>
      </Switch>
    </Router>
  );
}

export default App