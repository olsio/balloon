import React from 'react'
import './App.css'
import 'typeface-roboto'
import Balloon from './Balloon'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Config from './Config'
import { getUiState, roundIsRunning } from './UiState'

const styles = theme => ({
  root: {
    height: '100vh'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
})

const sleep = milliseconds => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const defaultState = {
  pumps: 0,
  rounds: Config.maxPumps,
  currentRound: 0,
  winnings: 0,
  runningAnimation: false,
  buttonText: 'Take winnings'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
  }

  runAnimation(time = 500) {
    this.setState({ runningAnimation: true })
    sleep(time).then(() => this.setState({ runningAnimation: false }))
  }

  pump() {
    const { pumps } = this.state

    this.runAnimation()
    this.setState({ pumps: pumps + 1 })
  }

  nextRound() {
    const { pumps, currentRound, winnings } = this.state
    const won = roundIsRunning(this.state)
    this.setState({
      ...defaultState,
      currentRound: currentRound + 1,
      winnings: won ? winnings + pumps : winnings
    })
  }

  render() {
    const { classes } = this.props
    const { pumps, winnings } = this.state

    const {
      start,
      end,
      nextButtonActive,
      pumpButtonActive,
      showBalloon,
      nextButtonText
    } = getUiState(this.state)

    const pumpButton = (
      <Button
        variant="contained"
        fullWidth
        color="primary"
        disabled={!pumpButtonActive}
        onClick={() => this.pump()}
      >
        Pump
      </Button>
    )

    const startScreen = (
      <div>
        <Typography gutterBottom variant="h4">
          Start
        </Typography>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={() => this.nextRound()}
        >
          Start
        </Button>
      </div>
    )

    const gameScreen = (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography gutterBottom variant="h4">
              Overall
            </Typography>
            <TextField
              id="outlined-name"
              label="Winnings"
              margin="normal"
              variant="outlined"
              disabled="true"
              fullWidth
              value={winnings}
            />
            <Divider variant="middle" />
            <Typography gutterBottom variant="h4">
              Current round
            </Typography>
            <TextField
              id="outlined-name"
              label="Earned"
              margin="normal"
              variant="outlined"
              disabled="true"
              fullWidth
              value={pumps}
            />
            {pumpButton}
            <Button
              variant="contained"
              fullWidth
              color="primary"
              disabled={!nextButtonActive}
              onClick={() => this.nextRound()}
            >
              {nextButtonText}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={7} component={Paper} square>
          <div className={classes.paper}>
            <Balloon
              size={pumps * Config.sizeIncrease}
              exploded={!showBalloon}
            />
          </div>
        </Grid>
      </Grid>
    )

    const main = start ? startScreen : gameScreen

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        {main}
      </Grid>
    )
  }
}
export default withStyles(styles)(App)
