import React, { useEffect, useState } from "react"
import CardDish from "./CardDish"
import styles from "./styles/Dishes.module.css"
import HttpCliente from "../../services/HttpCliente";
import { useParams } from "react-router-dom"
const UrlAllDish = "/Dish?idBusiness="

export default function Dishes ({ rol, singUp }) {
    let {restaurant_id} = useParams();

    const [allDish, setAllDish] = useState([])

    useEffect(() => {
        HttpCliente.get(`${UrlAllDish}${restaurant_id}`)
        .then((response) => {
          setAllDish(response.data.data);
          console.log("respuesta dish",response.data.data);
        },err=>{console.error(err)})
        // console.log(allDish)
  }, [restaurant_id]);
  
        console.log(allDish)

    return (
        <div className={styles.container}>
          <h1 className={styles.title}>Menú!</h1>
          <div className={styles.boxCards}>
            {allDish &&
            allDish.map((dish) => {
              return (
                <CardDish dish={dish} key={dish.id} singUp={singUp} rol={rol}/>
              )   
              })
            }           
          </div>
        </div>
    )
}
