/* eslint-disable react/self-closing-comp */
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link'

const Menu = () => {
  const menuLinks = [
    { name: 'HOME', link: '#' },
    { name: 'OUR TEAM', link: '#our-team' },
    { name: 'PROCEDURES', link: '#procedures' },
  ]

  return (
    <div className="menu justify-around items-center flex">
      <img src="/logo.png" alt="logo" width={250} />
      <div className="menu-link">
        {menuLinks.map((link) => (
          <Link href={link.link} key={uuidv4()} passHref>
            <a className="m-5">{link.name}</a>
          </Link>
        ))}
      </div>
      <div className="contact grid grid-cols-2 grid-rows-2 ">
        <i className="fas fa-phone-alt fa-2x flex justify-center items-center row-span-full"></i>
        <p className="text-sm flex items-center">CALL US NOW</p>
        <h3 className="font-bold text-lg">071 293 8242</h3>
      </div>
    </div>
  )
}

export default Menu
