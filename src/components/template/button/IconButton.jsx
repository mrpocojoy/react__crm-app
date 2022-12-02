import React from 'react'
import './Button.scss'

import Icon from '../icon/Icon'

const IconButton = ({ label, icon, classes, action, ...props }) => (

  <button className={`button ${classes}`} onClick={action}>
    <Icon classes={`${classes}-icon`} iconName={icon} />
    {props.children} {label}
  </button>

)

export default IconButton