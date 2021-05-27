import React from 'react'
import { Menu, SocialIcons } from '..'

const Header = () => {
  return (
    <div className="header bg-white">
      <SocialIcons className="justify-end border-b border-black" />
      <Menu />
    </div>
  )
}

export default Header
