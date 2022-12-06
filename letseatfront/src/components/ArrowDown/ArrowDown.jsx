import React from "react"
import styles from "./styles/ArrowDown.module.css"
import { SlArrowDown } from "react-icons/sl"

export default function ArrowDown () {
  return (
        <div className={styles.container}>
            <SlArrowDown className={styles.iconArrow} />
        </div>
  )
}
