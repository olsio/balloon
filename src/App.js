import React from 'react'
import './App.css'
import Balloon from './Balloon'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { CSSTransitionGroup } from 'react-transition-group'

const App = () => {
  const [scale, setScale] = React.useState(40)
  const [exploded, setExploded] = React.useState(false)

  const balloon = exploded ? null : <Balloon key={scale} size={scale} />

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            id="outlined-name"
            label="Scale"
            margin="normal"
            variant="outlined"
            disabled="true"
            value={scale}
          />
          <Button
            variant="contained"
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
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <CSSTransitionGroup
            transitionName="example"
            transitionLeave={exploded}
          >
            {balloon}
          </CSSTransitionGroup>
        </Grid>
      </Container>
    </div>
  )
}
export default App
