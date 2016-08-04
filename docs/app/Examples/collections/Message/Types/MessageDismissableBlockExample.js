import React, { Component } from 'react'
import { Message } from 'stardust'

export default class MessageDismissableBlockExample extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false })

    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  }

  render() {
    if (this.state.visible) {
      return (
        <Message
          dismissable
          onDismiss={this.handleDismiss}
          header='Welcome back!'
          content='This is a special notification which you can dismiss.'
        />
      )
    }

    return (
      <p>
        <br />
        <i>The message will return in 2s</i>
        <br />
        <br />
      </p>
    )
  }
}
