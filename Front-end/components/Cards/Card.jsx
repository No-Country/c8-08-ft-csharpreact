import React from "react"
import PropTypes from "prop-types"
import Image from "next/image"
import styles from "./styles/Card.module.css"
import like from "./pictures/me-gusta.png"

export default function Card ({ num }) {
  return (
    <div className={styles.container}>
        <div className={styles.picture}>
            <Image className={styles.like} src={like} alt="HeartIcon" />
        </div>
        <h3 className={styles.name}>Restaurante numero {num}!</h3>
        <h5 className={styles.details}>Aqui irá algo de detalle sobre el restaurante</h5>
    </div>)
}

Card.propTypes = { num: PropTypes.any }
