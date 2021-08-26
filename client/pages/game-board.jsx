import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import PlayerHand from '../components/PlayerHand';
import game from '../lib/game.js';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#151224',
    height: '100vh',
    width: 'calc(100% - 300px)',
    paddingTop: '64px',
    float: 'right'
  },
  columnSm: {
    height: '100%'
  },
  midRow: {
    height: '50%'
  },
  midCards: {
    height: '25%'
  },
  card: {
    height: 140,
    width: 100
  }
}));

export default function GameBoard() {
  const classes = useStyles();
  const players = game();

  return (
    <div className={classes.root}>
      <Grid container spacing={0} className={classes.columnSm}
        onDragOver={e => e.preventDefault()}>

        <Grid className={classes.columnSm}
          container item xl={2} spacing={0}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <PlayerHand side={'left'} player={players[0]}/>
        </Grid>

        <Grid className={classes.columnSm}
          container item xl={8} spacing={0}
        >
          <Grid className={classes.midCards}
            container item xl={12} spacing={1}
            direction="row-reverse"
            justifyContent="center"
            alignItems="center"
          >
            <PlayerHand side={'top'} player={players[1]} />
          </Grid>

          <Grid className={classes.midRow}
            container item xl={12} spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Paper className={classes.card}>
                CARD PLAYED
              </Paper>
              {/* <img src="./images/uno-red.png" alt=""
                className={classes.card} /> */}
            </Grid>
            <Grid item>
              <Paper className={classes.card}>
                DECK
              </Paper>
              {/* <img src="./images/uno-red.png" alt=""
                className={classes.card} /> */}
            </Grid>
          </Grid>

          <Grid className={classes.midCards}
            container item xl={12} spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <PlayerHand side={'bottom'} player={players[2]} />
          </Grid>
        </Grid>

        <Grid className={classes.columnSm}
          container item xl={2} spacing={0}
          direction="column-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <PlayerHand side={'right'} player={players[3]} />
        </Grid>

      </Grid>
    </div >
  );
}
