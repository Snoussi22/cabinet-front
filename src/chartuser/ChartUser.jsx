import React from 'react';
import {Bar, Line ,Pie ,Doughnut}from 'react-chartjs-2';
import './ChartUser.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

  
  function Chart(){
          const data ={
            labels :['jan','feb','mar','apr','may','jun','jul','aout','Sep','Nov','Oct','Dec'],
            disabled : '',
            datasets: [ 
                {  
                  label:'Number of new users',
                    data:[30,25,10,31,6,19,23,12,18,22,45,11],
                    backgroundColor: [
                        'rgb(115, 179, 243)'
                      ],
                      pointBackgroundColor:[
                        'rgb(115, 179, 243)'
                      ],

                }
                
            ]
        }
          return (
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12} className="icons">
            <Card className="card">
                <Line className="chars" data={data}/>
                </Card>
              </Grid>
            </Grid>
                
          )
  }

  export default Chart