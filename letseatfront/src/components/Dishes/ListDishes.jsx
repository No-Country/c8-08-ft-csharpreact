import React, { useEffect, useState } from "react"
import MiniCardDish from "./MiniCardDish";
import styles from "./styles/ListDishes.module.css"

import axios from "axios"
const UrlAllDish = "http://platano-001-site1.ftempurl.com/api/Dish?idBusiness="

export default function ListDishes ({ restaurant_id, setShow, show }) {
    const [allDish, setAllDish] = useState([])

    useEffect(() => {
      return async () => {
        await axios.get(`${UrlAllDish}${restaurant_id}`)
        .then((response) => setAllDish(response.data.data))
    }
  }, [restaurant_id, ]);
 
        return (
            <div className={styles.container}>
              {allDish &&
              allDish.map((dish) => {
                return (
                  <MiniCardDish dish={dish} key={dish.id} />
                )   
                })
              }           
            </div>

          )

    
}