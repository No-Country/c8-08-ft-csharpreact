import React from 'react'
import Cards from '../components/Cards/Cards.jsx'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer.jsx'
import Presentation from '../components/Presentation/Presentation.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import Explain from '../components/Explain/Explain.jsx'
import Filters from "../components/Filters/Filters.jsx"

export default function Home () {
  return (
    <div className={ styles.container }>
      <Presentation />
      <Explain />
      <Filters />
      <Cards/>
      <NavBar />
      <Footer/>
    </div>
  )
}
