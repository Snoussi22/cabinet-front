import React from 'react';
import { useTheme, alpha, makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import {Autocomplete} from '@material-ui/lab';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputBase from '@material-ui/core/InputBase';
import "./Search.css";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100wv",
    fontSize: 13,
  },
  button: {
    fontSize: 13,
    width: '100%',
    textAlign: 'left',
    paddingBottom: 8,
    color: '#586069',
    fontWeight: 600,
    '&:hover,&:focus': {
      color: '#0366d6',
    },
    '& span': {
      width: '100%',
    },
    '& svg': {
      width: 16,
      height: 16,
    },
  },
  tag: {
    marginTop: 3,
    height: 20,
    padding: '.15em 4px',
    fontWeight: 600,
    lineHeight: '15px',
    borderRadius: 2,
  },
  popper: {
    border: '1px solid rgba(27,31,35,.15)',
    boxShadow: '0 3px 12px rgba(27,31,35,.15)',
    borderRadius: 3,
    width: 300,
    zIndex: 1,
    fontSize: 13,
    color: '#586069',
    backgroundColor: '#f6f8fa',
  },
  header: {
    borderBottom: '1px solid #e1e4e8',
    padding: '8px 10px',
    fontWeight: 600,
  },
  inputBase: {
    padding: 10,
    width: '100%',
    borderBottom: '1px solid #dfe2e5',
    '& input': {
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      padding: 8,
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      border: '1px solid #ced4da',
      fontSize: 14,
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    boxShadow: 'none',
    margin: 0,
    color: '#586069',
    fontSize: 13,
  },
  option: {
    minHeight: 'auto',
    alignItems: 'flex-start',
    padding: 8,
    '&[aria-selected="true"]': {
      backgroundColor: 'transparent',
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  popperDisablePortal: {
    position: 'relative',
  },
  iconSelected: {
    width: 17,
    height: 17,
    marginRight: 5,
    marginLeft: -2,
  },
  color: {
    width: 14,
    height: 14,
    flexShrink: 0,
    borderRadius: 3,
    marginRight: 8,
    marginTop: 2,
  },
  text: {
    flexGrow: 1,
  },
  close: {
    opacity: 0.6,
    width: 18,
    height: 18,
  },
}));

export default function GitHubLabel() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState([labels[1], labels[11]]);
  const [pendingValue, setPendingValue] = React.useState([]);
  const theme = useTheme();

  const handleClick = (event) => {
    setPendingValue(value);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, reason) => {
    if (reason === 'toggleInput') {
      return;
    }
    setValue(pendingValue);
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'github-label' : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid lg={12}>
            <ButtonBase
              disableRipple
              className={classes.button}
              aria-describedby={id}
              onClick={handleClick}
            >
          <div className="searchico">
            <i class="fas fa-search searchicofont"></i>
          </div>
        </ButtonBase>
        {value.map((label) => (
          <div
            key={label.name}
            className="listAPPointmentItem"
          >
            <Grid container spacing={1}>
              <Grid lg={4} className="hhhh">
                {label.name}
              </Grid>
              <Grid lg={3} className="hhhh">
                <Grid container spacing={1} className="item">
                  <Grid lg={4} className="quanticofont">
                    <i class="fas fa-minus icoquant"></i>
                  </Grid>
                  <Grid lg={3} className="quant">
                      2
                  </Grid>
                  <Grid lg={4} className="quanticofont">
                    <i class="fas fa-plus icoquant"></i>
                  </Grid>
                </Grid>
              </Grid>
              <Grid lg={5} className="AppointmentmentPrice hhhh">
                <Grid container spacing={0} className="item">
                    <Grid lg={6} className="quanticofont">
                    <TextField id="standard-basic" label="Duration" /> 
                    </Grid>
                    <Grid lg={4}>
                        Days
                    </Grid>
                  </Grid>
              </Grid>
              </Grid>
              
          </div>
          
        ))}
      <Popper
        className="searchpooper"
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
      >
        
        <Autocomplete
          open
          onClose={handleClose}
          multiple
          classes={{
            paper: classes.paper,
            option: classes.option,
            popperDisablePortal: classes.popperDisablePortal,
          }}
          value={pendingValue}
          onChange={(event, newValue) => {
            setPendingValue(newValue);
          }}
          disableCloseOnSelect
          disablePortal
          renderTags={() => null}
          noOptionsText="No labels"
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <DoneIcon
                className={classes.iconSelected}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
              <div className={classes.text}>
                {option.name}
                <br />
                {option.description}
              </div>
              <CloseIcon
                className={classes.close}
                style={{ visibility: selected ? 'visible' : 'hidden' }}
              />
            </React.Fragment>
          )}
          options={[...labels].sort((a, b) => {
            // Display the selected labels first.
            let ai = value.indexOf(a);
            ai = ai === -1 ? value.length + labels.indexOf(a) : ai;
            let bi = value.indexOf(b);
            bi = bi === -1 ? value.length + labels.indexOf(b) : bi;
            return ai - bi;
          })}
          getOptionLabel={(option) => option.name}
          renderInput={(params) => (
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              className={classes.inputBase}
            />
          )}
        />
      </Popper>
            </Grid>
        </Grid>
        <Grid lg={12}>
        <i class="fas fa-save emm"></i>
        </Grid>
      </div>
    </React.Fragment>
   
    
  );
}

// From https://github.com/abdonrd/github-labels
const labels = [
  {
    name: 'good first issue    2 times',
    description: '',
  },
  {
    name: 'help wanted',
    description: 'Extra attention is needed',
  },
  {
    name: 'priority: critical',
    description: '',
  },
  {
    name: 'priority: high',
    description: '',
  },
  {
    name: 'priority: low',
    description: '',
  },
  {
    name: 'priority: medium',
    description: '',
  },
  {
    name: "status: can't reproduce",
    description: '',
  },
  {
    name: 'status: confirmed',
    description: '',
  },
  {
    name: 'status: duplicate',
    description: 'This issue or pull request already exists',
  },
  {
    name: 'status: needs information',
    description: '',
  },
  {
    name: 'status: wont do/fix',
    description: 'This will not be worked on',
  },
  {
    name: 'Doliprane',
    description: "Something isn't working",
  },
  {
    name: 'type: discussion',
    description: '',
  },
  {
    name: 'type: documentation',
    description: '',
  },
  {
    name: 'type: enhancement',
    description: '',
  },
  {
    name: 'type: epic',
    description: 'A theme of work that contain sub-tasks',
  },
  {
    name: 'type: feature request',
    description: 'New feature or request',
  },
  {
    name: 'type: question',
    description: 'Further information is requested',
  },
];