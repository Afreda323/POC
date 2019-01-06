import React, { Component, Fragment } from 'react'
import Themer, { theme } from '../src/theme'

export default class ThemeWrapper extends Component {
  render() {
    return (
      <Themer theme={theme}>
        <Fragment>{this.props.children}</Fragment>
      </Themer>
    )
  }
}
