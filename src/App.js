import React from 'react'
import './App.css'
import logo from './balloon.png'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { CSSTransitionGroup } from 'react-transition-group'

const useStyles = makeStyles(theme => ({
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
}))

const App = () => {
  const classes = useStyles()
  const [scale, setScale] = React.useState(40)
  const [exploded, setExploded] = React.useState(false)

  const balloon = exploded ? null : (
    <img src={logo} key={scale} alt="logo" style={{ height: `${scale}vmin` }} />
  )

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <TextField
            id="outlined-name"
            label="Scale"
            margin="normal"
            variant="outlined"
            disabled="true"
            fullWidth
            value={scale}
          />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={() => {
              const newScale = scale + 5
              if (newScale <= 50) {
                setScale(newScale)
              } else {
                setExploded(true)
              }
            }}
          >
            Hello World
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} sm={4} md={7} component={Paper} square>
        <div className={classes.paper}>
          <CSSTransitionGroup
            transitionName="example"
            transitionLeave={exploded}
          >
            {balloon}
          </CSSTransitionGroup>
        </div>
      </Grid>
    </Grid>
  )
}
export default App
