import React from "react"
import ArrowDown from "../ArrowDown/ArrowDown"
import styles from "./styles/Presentation.module.css"

export default function Presentation () {
    return (
        <div className={styles.container}>
            <div className={styles.boxPrincipal}>
                <h1 className={styles.text1}>Let's</h1>
                <h1 className={styles.text2}>EAT!</h1>
                <h3 className={styles.text3}>Que buscar un restaurante no te quite las ganas de comer!</h3>
            </div>
            <ArrowDown className={styles.iconArrow} />
        </div>
    )
}