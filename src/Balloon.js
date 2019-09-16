import React from 'react'
import logo from './balloon.png'

export default class Balloon extends React.Component {
  render() {
    return (
      <img src={logo} alt="logo" style={{ height: `${this.props.size}vmin` }} />
    )
  }
}
