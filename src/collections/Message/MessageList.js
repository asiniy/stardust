import cx from 'classnames'
import React, { PropTypes } from 'react'

import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

import MessageListItem from './MessageListItem'

function MessageList(props) {
  const { className, children, items } = props
  const rest = getUnhandledProps(MessageList, props)
  const classes = cx('list', className)

  const itemsJSX = items && items.map(item => <MessageListItem key={item}>{item}</MessageListItem>)

  return <ul {...rest} className={classes}>{itemsJSX || children}</ul>
}

MessageList._meta = {
  library: META.library.semanticUI,
  name: 'MessageList',
  parent: 'Message',
  type: META.type.collection,
}

MessageList.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.node,

  /** Strings to use as list items. Mutually exclusive with children. */
  items: PropTypes.arrayOf(PropTypes.string),
}

export default MessageList