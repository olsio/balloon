import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Balloon from './Balloon'
import TextField from '@material-ui/core/TextField'

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
    nextButtonActive,
    exploded,
    takeWinnings,
    pumps,
    pump
  } = props

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.container}
      >
        <Grid item xs={12}>
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
            disabled={!nextButtonActive}
            onClick={takeWinnings}
          >
            Take Winnings
          </Button>
          <Balloon
            onClick={pump}
            pumps={pumps}
            exploded={exploded}
            nextRound={props.nextRound}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
