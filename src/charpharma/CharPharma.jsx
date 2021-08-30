import React from 'react';
import {Bar, Line ,Pie ,Doughnut}from 'react-chartjs-2';
import './CharPharma.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

  
  function Chart(){
    
    
        const data = {
            labels: [
              'A',
              'B',
              'C',
              'D',
              'E'
            ],
            disabled : '',

            datasets: [{
              data: [1344, 1202, 670,1020,123,],
              backgroundColor: [
                'rgb(33, 33, 80)',
                'rgb(63, 63, 238)',
                'rgb(60, 60, 168)',
                'rgb(88, 88, 138)',
                'rgb(161, 161, 184)'
              ],
              hoverOffset: 4
            }]
          } 
          return (
            <Grid container spacing={3}>
              <Grid item xs={12} lg={12} className="icons">
            <Card className="card"> 
            <h4>number of most used medications</h4>
            <Doughnut  className="charp"data={data}/>

                </Card>
              </Grid>
            </Grid>
                
          )
  }

  export default Chart