import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './styles.module.css'

import Button from './../Button'

const HeroSection = () => {
  const { data } = useStaticQuery(query)
  const { logo, heading, subheading } = data
  return (
    <header className={styles.container}>
      <nav>
        <img src={logo.url} />
      </nav>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.subheading}>{subheading}</p>
      <Button />
    </header>
  )
}

const query = graphql`
  query HeroSectionQuery {
    data: datoCmsHeroSection {
      logo {
        url
      }
      heading
      subheading
    }
  }
`

export default HeroSection