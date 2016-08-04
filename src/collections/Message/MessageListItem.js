import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function MessageListItem(props) {
  const { children } = props
  const rest = getUnhandledProps(MessageListItem, props)

  return <li {...rest}>{children}</li>
}

MessageListItem._meta = {
  library: META.library.semanticUI,
  name: 'MessageListItem',
  parent: 'Message',
  type: META.type.collection,
}

MessageListItem.propTypes = {
  /** Primary content. */
  children: PropTypes.node,
}

export default MessageListItem
