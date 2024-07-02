import React from 'react'

const Button = ({title, type, link, ...props}) => {
  return (
    <button type={type} className={props.className} onClick={props.handleClick}>{title}</button>
  )
}

export default Button
