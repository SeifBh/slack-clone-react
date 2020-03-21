import React from 'react'
import { Menu } from 'semantic-ui-react'

import UserPanel from './UserPanel'
import Channels from './Channels'

export default function SidePanel({ currentUser }) {
  return (
    <Menu
      inverted
      size="large"
      color="black"
      fixed="left"
      vertical
      style={{ fontSize: '1.2rem' }}
    >
      <UserPanel currentUser={currentUser} />
      <Channels />
    </Menu>
  )
}