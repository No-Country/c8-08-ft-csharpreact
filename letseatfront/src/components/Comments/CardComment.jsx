import React from "react"
import styles from "./styles/CardComment.module.css"
//import { AiFillStar } from 'react-icons/ai'

export default function CardComment ({num}) {
    return (
        <div className={styles.container}>
            <div className={styles.boxPrincipal}>
                <h2 className={ styles.title }>Comentario n° {num.id} al determinado restaurante</h2>
               
            </div>
                <h2 className={ styles.comment }>{num.description}</h2>
            </div>
    )
}