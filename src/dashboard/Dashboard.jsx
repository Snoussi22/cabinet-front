import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },rounded: {
      color: '#fff',
      backgroundColor: green[500],
    },
  }));

export default function Dashboard(){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
  
    return(
        
      <div className={classes.root}>
      <Grid container justifyContent="space-around"  spacing={5} >
          <Grid item xs={12} lg={4} className="icons" >
            <Card className="card1" variant="outlined">
               <CardContent>
                 <Grid container spacing={3}>
                   <Grid lg={12} className="statisticTitle" >
                     Static Users
                   </Grid>
                   <Grid lg={12}>
                   <i class="fas fa-chart-line icons1"></i>
                   </Grid>
                   <Grid lg={12}>
                    <Link  to='/UseStat'className="Linkstat" variant="outlined">
                        View More
                    </Link >
                   </Grid>
                 </Grid>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} className="icons" >
            <Card className="card2" variant="outlined">
               <CardContent>
                 <Grid container spacing={3}>
                   <Grid lg={12} className="statisticTitle" >
                     Static Medecament
                   </Grid>
                   <Grid lg={12}>
                      <i class="fas fa-chart-pie icons2"></i>
                   </Grid>
                   <Grid lg={12}>
                    <Link  to='/MedStat'className="Linkstat" variant="outlined">
                        View More
                    </Link >
                   </Grid>
                 </Grid>
                </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} lg={4} className="icons" >
            <Card className="card3" variant="outlined">
               <CardContent>
                 <Grid container spacing={3}>
                   <Grid lg={12} className="statisticTitle" >
                     Static Stock
                   </Grid>
                   <Grid lg={12}>
                      <i class="far fa-chart-bar icons3"></i>
                   </Grid>
                   <Grid lg={12}>
                    <Link  to='/StoStat'className="Linkstat" variant="outlined">
                        View More
                    </Link >
                   </Grid>
                 </Grid>
                </CardContent>
            </Card>
          </Grid>
          


          </Grid>
          <Grid  xs={12} container spacing={1}>
            <Grid lg={10}>
                <h1>Latest Appointments</h1>
            </Grid>
            <Grid lg={1} className="btnSettingLogo">
              <Button className="logo"><i class="fas fa-cog"></i></Button>
            </Grid>
            <Grid lg={1} className="btnAddLogo">
              <Button className="logo"><i class="fas fa-plus"></i></Button>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container >
                    <Grid item xs={1}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            <AssignmentIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                            <Grid lg={12} className="lastname">
                              Ali
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              20/07/2020
                            </Grid>
                            <Grid lg={12}>
                              10:00
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <Grid container>
                            <Grid lg={12}>
                              Prescription
                            </Grid>
                            <Grid lg={12}>
                              Subject
                            </Grid>
                          </Grid>
                        </Grid>
                        
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>








              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container >
                    <Grid item xs={1}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            <AssignmentIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                            <Grid lg={12} className="lastname">
                              Ali
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              20/07/2020
                            </Grid>
                            <Grid lg={12}>
                              10:00
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <Grid container>
                            <Grid lg={12}>
                              Prescription
                            </Grid>
                            <Grid lg={12}>
                              Subject
                            </Grid>
                          </Grid>
                        </Grid>
                        
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>








              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container >
                    <Grid item xs={1}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            <AssignmentIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                            <Grid lg={12} className="lastname">
                              Ali
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              20/07/2020
                            </Grid>
                            <Grid lg={12}>
                              10:00
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <Grid container>
                            <Grid lg={12}>
                              Prescription
                            </Grid>
                            <Grid lg={12}>
                              Subject
                            </Grid>
                          </Grid>
                        </Grid>
                        
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>









              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container >
                    <Grid item xs={1}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            <AssignmentIcon />
                          </Avatar>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              hhh
                            </Grid>
                            <Grid lg={12}>
                              hhh
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              hhh
                            </Grid>
                            <Grid lg={12}>
                              hhh
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <Grid container>
                            <Grid lg={12}>
                              hhh
                            </Grid>
                            <Grid lg={12}>
                              hhh
                            </Grid>
                          </Grid>
                        </Grid>
                        
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
    </div>

    
    
    )
}