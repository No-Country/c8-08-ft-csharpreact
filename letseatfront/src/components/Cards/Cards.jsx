import React from "react"
import styles from "../Cards/styles/Cards.module.css"
import Card from "../Cards/Card.jsx"

export default function Cards () {
  const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
        <div className={styles.container}>
            {numeritos && numeritos.map(
              num => <Card num={num} key={num.toString()} />
            )}
        </div>
  )
}
