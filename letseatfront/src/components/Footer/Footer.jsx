import React from "react"
import styles from "./styles/Footer.module.css"

export default function Footer () {
  return (
        <div className={styles.container}>
            <h1 className={styles.name}>© 2022 Let{"'"}s eat!</h1>
            <h1 className={styles.contact}>Contact us</h1>
        </div>
  )
}
