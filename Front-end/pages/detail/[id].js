import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import styles from "../../styles/detail.module.css"
import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'

export default function Detail () {
  return (
      <>
      <NavBar />
      <div className={ styles.container }>
        <h1 className={styles.name}>Nombre del Restaurante N° algo</h1>
        <div className={styles.boxDetails}>
          <AiFillStar/>
          <h5 className={styles.details}>5.0</h5>
          <BsDot className={styles.dot}/>
          <h5 className={styles.details}>Comments</h5>
          <BsDot className={styles.dot}/>
          <h5 className={styles.details}>Location ???? </h5>
        </div>
        <div className={styles.boxPictures}>
          <div className={styles.principalPicture}></div>
          <div className={styles.boxSecondaryPictures}>
            <div className={styles.secondaryPicture1}></div>
            <div className={styles.secondaryPicture2}></div>
            <div className={styles.secondaryPicture3}></div>
            <div className={styles.secondaryPicture4}></div>
          </div>
        </div>
        <div>
          <h1 className={styles.nameOwner}>Owner: nombre del {`"usuario dueño"`}</h1>
        </div>
      </div>
      </>
  )
}
