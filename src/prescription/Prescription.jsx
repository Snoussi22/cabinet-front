import React, {useState, useEffect} from "react";
import "./Prescription.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CharUser from "../chartuser/ChartUser";
import CharStock from "../chartstock/ChartStock";
import CharPharma from "../charpharma/CharPharma";
import TimelineIcon from '@material-ui/icons/Timeline';
import Search from "../search/Search";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));

export default function Prescription(){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return(
        
      <div className={classes.root}>
        <h1>Prescriptions</h1>
      <Grid>
          <Grid item xs={12} lg={12} className="icons">
            <Card  variant="outlined">
            <CardContent>
            <Search />   
            </CardContent>
            </Card>
          </Grid>
              
    </Grid>
    </div>

    
    
    )
}