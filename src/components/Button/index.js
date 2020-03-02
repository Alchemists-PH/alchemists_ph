import React from 'react'
import { Link } from 'gatsby'
import styles from './index.module.css'

const Button = ({ buttonText, buttonURL }) => {
  return (
    <Link to={buttonURL} className={styles.container}>
      {buttonText}
    </Link>
  )
}

Button.defaultProps = {
  buttonText: 'View Meetups',
  buttonURL: '/',
}

export default Button
