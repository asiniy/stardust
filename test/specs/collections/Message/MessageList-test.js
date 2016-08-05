import React from 'react'
import MessageList from 'src/collections/Message/MessageList'
import MessageListItem from 'src/collections/Message/MessageListItem'
import * as common from 'test/specs/commonTests'

describe('MessageList', () => {
  common.isConformant(MessageList)
  common.rendersChildren(MessageList)
  common.hasSubComponents(MessageList, [MessageListItem])

  it('renders an ul tag', () => {
    shallow(<MessageList />)
      .should.have.tagName('ul')
  })

  it('has className list', () => {
    shallow(<MessageList />)
      .should.have.className('list')
  })

  describe('items', () => {
    it('creates MessageListItem children', () => {
      const items = ['foo', 'bar', 'baz']
      const wrapper = shallow(<MessageList items={items} />)

      wrapper.should.have.exactly(3).descendants('MessageListItem')

      wrapper
        .childAt(0)
        .shallow()
        .should.have.text(items[0])

      wrapper
        .childAt(1)
        .shallow()
        .should.have.text(items[1])

      wrapper
        .childAt(2)
        .shallow()
        .should.have.text(items[2])
    })
  })
})
