import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  mapMarkerIcon: {
    margin: theme.spacing(2),
    color: theme.palette.grey[300],
  }
}));

export default function Hero() {
  const classes = useStyles();

  return (
      <div style={{padding: '30px 25%', background: 'turquoise'}}>
      <h1 style={{color: '#046169'}}>Fixer un rendez-vous avec un transporteur et suivre sa position le jour de chargement</h1>
      <h2 style={{color: '#10898D'}}>Si le transporteur ne peut pas venir pour x raison, on vous trouve un autre en moins d'une minute</h2>
    <Paper component="form" className={classes.root}>
    <FontAwesomeIcon icon="map-marker-alt" className={classes.mapMarkerIcon} size="2x"/>
      <InputBase
        className={classes.input}
        placeholder="Ou?"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
    </div>
  );
}
