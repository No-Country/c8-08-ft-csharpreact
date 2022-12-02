import React from "react"
import styles from "./styles/Explain.module.css"
import { ImSpoonKnife } from "react-icons/im"
import { AiFillStar } from 'react-icons/ai'
import { MdFoodBank } from 'react-icons/md'
import { FaCommentDots } from 'react-icons/fa'



export default function Explain () {
    return (
        <div className={styles.container}>
            <div className={styles.boxPrincipal}>
                <div className={styles.cardPrincipal}>
                    <h3 className={styles.text1}>No pierdas más de tu tiempo!</h3>
                    <h3 className={styles.text2}>Encontrarás más rápido a dónde ir comer, ya que podrás:</h3>
                </div>
                <div className={styles.boxCards}>
                    <div className={styles.card}>
                        <MdFoodBank className={ styles.icon } />
                        <h3 className={styles.text3}>Buscar y conocer todos los restaurantes en donde te encuentres</h3>
                    </div>
                    <div className={styles.card}>
                        <AiFillStar className={ styles.icon } />
                        <h3 className={styles.text3}>Conocer los TOP 10 restaurantes más elegidos por la comunidad</h3>
                    </div>
                    <div className={styles.card}>
                        <ImSpoonKnife className={ styles.icon } />
                        <h3 className={styles.text3}>Ver los menús de cada restaurante</h3>
                    </div>
                    <div className={styles.card}>
                        <FaCommentDots className={ styles.icon } />
                        <h3 className={styles.text3}>Contar tus experiencias y ayudar a otros a saber cúal es la mejor opción</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}