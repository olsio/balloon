import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Balloon from './Balloon'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Config from './Config'
import './GameScreen.css'

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))

export default function GameScreen(props) {
  const classes = useStyles()

  const {
    winnings,
    earned,
    nextRound,
    nextButtonText,
    nextButtonActive,
    showBalloon,
    pumpButtonActive,
    pumps,
    pump
  } = props

  return (
    <React.Fragment>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <TextField
            id="outlined-name"
            label="Winnings"
            margin="normal"
            variant="outlined"
            disabled={true}
            fullWidth
            value={winnings}
          />
          <TextField
            id="outlined-name"
            label="Earned"
            margin="normal"
            variant="outlined"
            disabled={true}
            fullWidth
            value={earned}
          />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            disabled={!pumpButtonActive}
            onClick={pump}
          >
            Pump
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            disabled={!nextButtonActive}
            onClick={nextRound}
          >
            {nextButtonText}
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={4} md={7} component={Paper} square>
        <div className={classes.paper}>
          <Balloon size={pumps * Config.sizeIncrease} exploded={!showBalloon} />
        </div>
      </Grid>
    </React.Fragment>
  )
}
