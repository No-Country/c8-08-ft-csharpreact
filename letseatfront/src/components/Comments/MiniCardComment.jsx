import React from "react"
import styles from "./styles/MiniCardComment.module.css"
//import { AiFillStar } from 'react-icons/ai'

export default function MiniCardComment ({num}) {
    return (
        <div className={styles.container}>
            <div className={styles.boxPrincipal}>
                <h2 className={ styles.comment }>{num.description}</h2>
            </div>
        </div>
    )
}