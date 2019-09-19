import React, { useState } from 'react'

import './Balloon.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Config from './Config'
import Exploding from './images/balloon_explode.png'

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
    <React.Fragment>
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
    </React.Fragment>
  )
}
export default Balloon
