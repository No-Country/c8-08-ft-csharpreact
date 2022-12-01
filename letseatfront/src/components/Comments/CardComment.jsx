import React from "react"
import styles from "./styles/CardComment.module.css"
import { AiFillStar } from 'react-icons/ai'

export default function CardComment ({num}) {
    return (
        <div className={styles.container}>
            <div className={styles.boxPrincipal}>
                <h2 className={ styles.title }>Comentario n° {num.numero} al determinado restaurante</h2>
                <div className={styles.boxScore}>
                    <AiFillStar/>
                    <h5 className={styles.details}>{num.score}</h5>
                </div>
            </div>
                <h2 className={ styles.comment }>{num.comment}</h2>
            </div>
    )
}