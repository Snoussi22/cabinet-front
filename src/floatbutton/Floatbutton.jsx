import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Agenda from "../agenda/Agenda";
import Card from '@material-ui/core/Card';
import Password from "../password/Password";
import Floatbutton from "../floatbutton/Floatbutton";
import "./Floatbutton.css";
import { Link } from 'react-router-dom';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#fff',
    width: 500,
    position: 'relative',
    minHeight: 200
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit',
    },
   
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static"   color="default">
        <Tabs
        
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          
        >
          <Tab  label="Login" className="dd"  {...a11yProps(0)} />
          <Tab label="Inscription" className="dd" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x' }
        index={value}
        onChangeIndex={handleChangeIndex}
        onclcik={this}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
        <h1>Cabinet</h1>
          <TextField label="E-mail"/>
          <br/>
          <TextField label="Password" />
          <br/>
          <br/>
          <Link className="LinkMenu" to='/'>
          <Button variant="contained" color="primary">
              Login
            </Button> 
              </Link >
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <h1>Cabinet </h1>
          <TextField label="Last Name" className={classes.fix} />
          <TextField label="First Name" />
          <br/>
          <TextField label="Type"className={classes.fix} />
          <TextField label="Phone" />
          <Agenda />
          <TextField label="E-mail" />
          <Password label="Password" />
          <br/>
          <br/>
          <Link className="LinkMenu" to='/'>
          <Button variant="contained" color="primary">
              Inscription
            </Button>
              </Link >
          
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}