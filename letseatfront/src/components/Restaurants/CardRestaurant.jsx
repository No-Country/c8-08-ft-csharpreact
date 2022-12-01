import React from "react"
import styles from "./styles/CardRestaurants.module.css"
import { AiTwotoneEdit, AiOutlineDelete } from 'react-icons/ai'
import { ImSpoonKnife } from "react-icons/im"

export default function CardRestaurant ({num}) {
    return (
        <div className={styles.container}>
            <h2 className={ styles.text }>Restaurant n° {num}</h2>
            <div className={styles.boxIcons}>
            <button className={ styles.buttonIcon }><ImSpoonKnife className={ styles.icon } /></button>
                <button className={ styles.buttonIcon }><AiTwotoneEdit className={ styles.icon } /></button>
                <button className={ styles.buttonIcon }><AiOutlineDelete className={ styles.icon } /></button>
            </div>
        </div>
    )
}