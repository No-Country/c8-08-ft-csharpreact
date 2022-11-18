import React from "react"
import PropTypes from "prop-types"
import styles from "./styles/Card.module.css"
import { AiFillStar } from 'react-icons/ai'
import { TfiHeart } from 'react-icons/tfi'

export default function Card ({ num }) {
  return (
    <div className={styles.container}>
        <div className={styles.picture}>
            <TfiHeart className={styles.like} />
        </div>
        <div className={styles.boxTitle}>
            <h3 className={styles.name}>Restaurante numero {num}!</h3>
            <div className={styles.boxScore}>
                <AiFillStar/>
                <h5 className={styles.details}>5.0</h5>
            </div>
        </div>
        <h5 className={styles.details}>Aqui irá algo de detalle sobre el restaurante</h5>
    </div>)
}

Card.propTypes = { num: PropTypes.any }
