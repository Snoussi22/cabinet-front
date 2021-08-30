import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Menu.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Menu(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
      <Grid container >


          <Grid item xs={12} lg={6} className="icons">
              <div className="image">
              <Link className="LinkMenu"  to='/'><i class="fas fa-home ico"></i>
              <p>Home</p>
              </Link >
        
            </div>

          </Grid>


          <Grid item xs={12} lg={6} className="icons">
              <div className="image">
              <Link className="LinkMenu" to='/Prescription'><i class="fas fa-notes-medical icop" ></i>
              <p>Prescriptions</p>
              </Link >
            </div>

          </Grid>
          

          <Grid item xs={12} lg={6} className="icons">
            <div className="image">
              <a href="#" >
              <i class="fas fa-pills icom"></i></a>
              <p>Medications</p>
            </div>

          </Grid>

          <Grid item xs={12} lg={6} className="icons">
            <div className="image">
              <Link className="LinkMenu" to='/Appointment'><i class="fas fa-calendar-alt icoa"></i>
              <p>Appointments</p>
              </Link >
            </div>
          </Grid>

          <Grid item xs={12} lg={6} className="icons">
            <div className="image">
            <Link className="LinkMenu" to='/Stock'>
              <i class="fas fa-cubes icos"></i>
              <p>Stock</p>
              </Link >
            </div>

          </Grid>

          <Grid item xs={12} lg={6} className="icons">
            <div className="image">
              <a href="#" >
              <i class="fas fa-users icof"></i></a>
              <p>Users</p>
            </div>
          </Grid>
          
          <Grid item xs={12} lg={6} className="icons">
            <div className="image">
              <a href="#" >
              <i class="fas fa-file-medical icol"></i></a>
              <p>File Medical</p>
            </div>
          </Grid>

          <Grid item xs={12} lg={6} className="icons">
            <div className="image">
              <a href="#" >
              <i class="fas fa-file-medical ico"></i></a>
              <p>File Medical</p>
            </div>
          </Grid>
      </Grid>
    </div>

    
    
    )
}