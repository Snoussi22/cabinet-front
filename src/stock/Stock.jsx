import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./Stock.css";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },table: {
        minWidth: 650,
      }
  }));
  function createData(name, Quantity, Rest_of_quantity, Percentage) {
    return { name, Quantity, Rest_of_quantity, Percentage };
  }
  
  const rows = [
    createData('Panadol', 159, 30, 18.81),
    createData('doliprane', 237, 9.0, 37),
    createData('Eclair', 262, 16.0, 24),
    createData('Cupcake', 305, 3.7, 67),
    createData('Gingerbread', 356, 16.0, 49),
  ];
  
  export default function Stock(){
      const classes = useStyles();
  
      return(
          <div>
              <h1>Stock</h1>
              <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Medicaments Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Rest of quantity</TableCell>
                <TableCell align="right">Percentage(%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Quantity}</TableCell>
                  <TableCell align="right">{row.Rest_of_quantity}</TableCell>
                  <TableCell align="right">{row.Percentage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          </div>
      
      )
  }