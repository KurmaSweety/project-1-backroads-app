import React from 'react'

const SocialLinks = ({id,href,icon},itemClass) => {
  return (
    <li key={id}>
    <a href={href} target="_blank" className= {itemClass}>
    <i className= {icon}></i>
    </a>
    </li>
  )
}

export default SocialLinks