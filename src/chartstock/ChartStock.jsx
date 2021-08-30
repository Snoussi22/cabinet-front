import React from 'react';
import {Bar, Line ,months ,Doughnut}from 'react-chartjs-2';
import './CharStock.css';


  
  function Chart(){
    
    const data ={
        labels :['jan','feb','mar','apr','may','jun'],
        disabled : '',
        datasets: [ 
            {
                label:'Quantity Of Stock Per Month',
                data:[3,2,2,1,5,10],
                backgroundColor: [
                    'rgb(248, 97, 9)',
                    'rgb(0, 255, 255)',
                    'rgb(248, 97, 9)',
                    'rgb(0, 255, 255)',
                    'rgb(248, 97, 9)',
                    'rgb(0, 255, 255)'
                  ]
            }
            
        ]
    }
    
    return (<Bar className="chars" data={data} />);
  }

  export default Chart