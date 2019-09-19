import React from 'react'

import './Balloon.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Config from './Config'
import Exploding from './images/balloon_explode.png'
import Grid from '@material-ui/core/Grid'

const Balloon = props => {
  const balloon = props.exploded ? (
    <img
      src={Exploding}
      alt="logo"
      style={{
        height: `${40 + Config.sizeIncrease * props.pumps}vmin`
      }}
    />
  ) : (
    <img
      src={Config.balloons[props.pumps]}
      alt="logo"
      style={{
        height: `${40 + Config.sizeIncrease * props.pumps}vmin`
      }}
      onClick={props.onClick}
    />
  )

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <TransitionGroup>
        <CSSTransition
          key={props.pumps}
          in={!props.exploded}
          timeout={500}
          classNames="balloon"
          exit={props.exploded}
        >
          {balloon}
        </CSSTransition>
      </TransitionGroup>
    </Grid>
  )
}
export default Balloon
