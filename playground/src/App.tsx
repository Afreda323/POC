import React, { Component } from 'react'
import { Button, TextInput } from '../../src'

const noop = () => null

class App extends Component {
  render() {
    return (
      <div>
        <TextInput name="name" onChange={noop} />
        <Button onClick={alert}>Click Me</Button>
      </div>
    )
  }
}

export default App
