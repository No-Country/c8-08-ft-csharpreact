import React from 'react'
import Cards from '../components/Cards/Cards.jsx'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer.jsx'

export default function Home () {
  return (
    <div className={ styles.container }>
      <Footer/>
      <Cards/>
    </div>
  )
}
