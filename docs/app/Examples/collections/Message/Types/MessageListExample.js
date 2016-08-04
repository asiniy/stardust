import React from 'react'
import { Message } from 'stardust'

const MessageListExample = () => (
  <Message>
    <Message.Header>New Site Features</Message.Header>
    <Message.List>
      <Message.List.Item>You can now have cover images on blog pages</Message.List.Item>
      <Message.List.Item>Drafts will now auto-save while writing</Message.List.Item>
    </Message.List>
  </Message>
)

export default MessageListExample
