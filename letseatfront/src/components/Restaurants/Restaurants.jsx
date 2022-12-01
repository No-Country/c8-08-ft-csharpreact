import React from "react"
import CardRestaurant from "./CardRestaurant"
import styles from "./styles/Restaurants.module.css"

export default function Restaurants () {
    const numeritos = [1,2,3,4]


    return (
        <div className={styles.container}>
            {numeritos && numeritos.map( 
               num => <CardRestaurant num={num} key={num.toString()} />
             )}
        </div>
    )
}
