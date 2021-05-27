/* eslint-disable react/self-closing-comp */
import React, { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'

const SocialIcons: FC<SocialIconsProps> = ({ className }) => {
  const IconGroup = ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-instagram', 'fas fa-map-marker-alt']
  return (
    <div className={`${className} flex`}>
      {IconGroup.map((icon) => (
        <i className={`${icon} m-5`} key={uuidv4()}></i>
      ))}
    </div>
  )
}

export default SocialIcons

interface SocialIconsProps {
  className?: string
}
