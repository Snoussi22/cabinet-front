import React from "react";
import "./CompteUpdate.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Password from "../password/Password";
import Avatar from '@material-ui/core/Avatar';
import lo from "../assets/images/ava1.png";
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
      },button: {
        margin: theme.spacing(1),
        marginLeft:'40%',
      }
  }));

export default function Compteupdate(){
    const classes = useStyles();
    
    return(
        <Card>
        <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={8}>
          <TextField label="Last Name" className={classes.fix} className="txt" />
        <br/>
        <br/>
        <br/>
        <TextField label="First Name"  className="txt" />
        <br/>
        <br/>
        <br/>
        <TextField label="Phone"  className="txt" />
        <br/>
        <br/>
        <br/>
        <Password label="Password"  className="txt"/>
        <br/>
        <br/>
        <br/>
        
        <TextField label="Confirm"  type="Password"className="txt" />
          </Grid>
          <Grid item xs={12} sm={4}>
              <div className="up">
        <Avatar alt="Remy Sharp" src={lo} className={classes.large} />
        <Button  variant="contained" color="primary" className="av">
        Importe
      </Button>
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid item xs={12}>
      <br/>
        <br/>
        <br/>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
        </Grid>
      </Card>
    )
}



    