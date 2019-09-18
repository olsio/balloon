import React from 'react'
import 'typeface-roboto'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Config from './Config'
import { getUiState, roundIsRunning } from './UiState'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import EndScreen from './EndScreen'
import _ from 'lodash'

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

const defaultState = () => {
  return {
    pumps: 0,
    earned: 0,
    rounds: _.shuffle(Config.maxPumps),
    currentRound: 0,
    winnings: 0,
    runningAnimation: false,
    buttonText: 'Take winnings'
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState()
  }

  runAnimation(time = 500) {
    this.setState({ runningAnimation: true })
    sleep(time).then(() => this.setState({ runningAnimation: false }))
  }

  pump() {
    const { pumps, earned } = this.state

    this.runAnimation()
    this.setState({
      pumps: pumps + 1,
      earned: earned + Config.earningScale[pumps]
    })
  }

  reset() {
    this.setState(defaultState())
  }

  nextRound() {
    const { earned, currentRound, winnings, rounds } = this.state
    const won = roundIsRunning(this.state)
    this.setState({
      ...defaultState(),
      rounds: rounds,
      currentRound: currentRound + 1,
      winnings: won ? winnings + earned : winnings
    })
  }

  currentScreen() {
    const { pumps, winnings, earned } = this.state

    const {
      currentScreen,
      nextButtonActive,
      pumpButtonActive,
      showBalloon,
      nextButtonText
    } = getUiState(this.state)

    switch (currentScreen) {
      case 'START':
        return <StartScreen onClick={() => this.nextRound()} />
      case 'END':
        return <EndScreen winnings={winnings} onClick={() => this.reset()} />
      default:
        return (
          <GameScreen
            pumps={pumps}
            winnings={winnings}
            earned={earned}
            nextRound={() => this.nextRound()}
            nextButtonText={nextButtonText}
            nextButtonActive={nextButtonActive}
            showBalloon={showBalloon}
            pumpButtonActive={pumpButtonActive}
            pump={() => this.pump()}
          />
        )
    }
  }

  render() {
    const { classes } = this.props

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        {this.currentScreen()}
      </Grid>
    )
  }
}
export default withStyles(styles)(App)
