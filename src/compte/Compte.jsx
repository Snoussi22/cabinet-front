import React, {useState, useEffect} from "react";
import "./Compte.css";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    
  root: {
    flexGrow: 1,
  }
  }));

export default function Compte(){
    const classes = useStyles();
  
    return(
        
                <div>
                  <h1>APPOINTMENTS</h1>
                  <Grid container spacing={3}>
      <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container >
                    <Grid item xs={2}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            
                          </Avatar>
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid container>
                            <Grid lg={12}>
                              37%
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
                    <Grid item xs={2}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            
                          </Avatar>
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid container>
                            <Grid lg={12}>
                              37%
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
                    <Grid item xs={2}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            
                          </Avatar>
                        </Grid>
                        <Grid item xs={3}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                            <Grid lg={12}>
                              Ali
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid lg={12}>
                              20/08/2021
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={3}>
                          <Grid container>
                            <Grid lg={12}>
                              15:30
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
                            <Grid lg={12}>
                            
                            <Button className="pluslog"><i class="fas fa-plus-square"></i></Button>
                            </Grid>
                          </Grid>
                        
                    
                   
                  </CardContent>
                </Card>
              </Grid>


              </Grid>

              <h1>Stock</h1>
              <Grid container spacing={3}>
      <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Grid container >
                    <Grid item xs={2}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            
                          </Avatar>
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid container>
                            <Grid lg={12}>
                              37%
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
                    <Grid item xs={2}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            
                          </Avatar>
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid container>
                            <Grid lg={12}>
                              37%
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
                    <Grid item xs={2}>
                          <Avatar variant="rounded" className={classes.rounded}>
                            
                          </Avatar>
                        </Grid>
                        <Grid item xs={8}>
                          <Grid container>
                            <Grid lg={12}>
                              Mohamed
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid container>
                            <Grid lg={12}>
                              37%
                            </Grid>
                          </Grid>
                        </Grid>
                        
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              </Grid>
                </div>
        
    )
}