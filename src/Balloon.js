import React from 'react'
import balloon from './balloon.png'
import { CSSTransitionGroup } from 'react-transition-group'

const Balloon = props => {
  const balloonComponent = props.exploded ? null : (
    <img
      src={balloon}
      key={props.size}
      alt="logo"
      style={{ height: `${40 + props.size}vmin` }}
    />
  )

  return (
    <CSSTransitionGroup
      transitionName="balloon"
      transitionLeave={props.exploded}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={1000}
    >
      {balloonComponent}
    </CSSTransitionGroup>
  )
}
export default Balloon
