import React, { useEffect, useState } from "react"
import CardDish from "./CardDish"
import styles from "./styles/Dishes.module.css"

import axios from "axios"
import { useParams } from "react-router-dom"
const UrlAllDish = "http://platano-001-site1.ftempurl.com/api/Dish?idBusiness="

export default function Dishes () {
    let {restaurant_id} = useParams();


    const [allDish, setAllDish] = useState([])

    useEffect(() => {
      // dispatch(getAllRestaurants());
      return async () => {
        await axios.get(`${UrlAllDish}${restaurant_id}`)
        .then((response) => setAllDish(response.data.data))
        // console.log(allDish)
    }
  }, [restaurant_id]);
  

    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Menú!</h1>
          <div className={styles.boxCards}>
            {allDish &&
            allDish.map((dish) => {
              return (
                <CardDish dish={dish} key={dish.id}/>
              )   
              })
            }           
          </div>
        </div>
    )
}
