import React, {Fragment} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles , useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Agenda from "../agenda/Agenda";
import Card from '@material-ui/core/Card';
import Password from "../password/Password";
import Floatbutton from "../floatbutton/Floatbutton";

const useStyles = makeStyles((theme) => ({
  fix: {
    marginRight: '30px'
  },
  fixa: {
    width : '60%',
    marginRight: '50px'
  },
  butt :{
    marginTop: '50px'
  },
  card : {
    marginTop: '50px',
    borderRadius : '20px'
  }, 
}));


export const Login = (props) => {
  const classes = useStyles(); 
  const theme = useTheme();
    
    return (
      
            <Floatbutton/>
    );
}