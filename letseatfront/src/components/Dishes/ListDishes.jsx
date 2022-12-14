import React, { useEffect, useState } from "react"
import MiniCardDish from "./MiniCardDish";
import styles from "./styles/ListDishes.module.css"
import HttpCliente from "../../services/HttpCliente";
const UrlAllDish = "/Dish?idBusiness="

export default function ListDishes ({ restaurant_id, setShow, show, setDetailDish }) {
    const [allDish, setAllDish] = useState([])

    useEffect(() => {
     
      HttpCliente.get(`${UrlAllDish}${restaurant_id}`)
        .then((response) => {
          setAllDish(response.data.data);
          console.log("respuesta dish",response.data.data);
        },err=>{console.error(err)})
  
  }, [restaurant_id, ]);
 
        return (
            <div className={styles.container}>
              {allDish &&
              allDish.map((dish) => {
                return (
                  <MiniCardDish dish={dish} key={dish.id} setDetailDish={setDetailDish} setShow={setShow}/>
                )   
                })
              }           
            </div>

          )

    
}
