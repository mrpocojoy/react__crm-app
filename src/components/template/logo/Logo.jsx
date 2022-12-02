import React from 'react'
import logoImg from 'assets/images/logo.svg'

const Logo = ({ classes }) => {
  return (
    <div className={`${classes}-wrapper`}>
      <img className={`${classes}-image`} src={logoImg} alt="app logo" />
    </div>
  )
}

export default Logo