import React, { useEffect } from "react"
import styles from "../Cards/styles/Cards.module.css"
import Card from "../Cards/Card.jsx"
// import { useDispatch, useSelector } from "react-redux";
// import { getAllRestaurants } from "../../redux/actions/index.js";

import axios from "axios"
import { useState } from "react";
const UrlAllRestaurant = "https://lets-eat.somee.com/api/Business/allBusines?PageNumber=1&PageSize=50"


export default function Cards () {
  // const restaurants = useSelector((state) => state.restaurants);
  // const dispatch = useDispatch();
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    // dispatch(getAllRestaurants());
    try {
      return async () => {
        await axios.get(UrlAllRestaurant)
        .then((response) => {
          console.log(response.data);
          setAllRestaurants(response.data.data)
        }
        )
      }
    }catch (erro){ console.log(erro); }
}, []);

  return (
        <div className={styles.container}>
          {allRestaurants &&
          allRestaurants.map((restaurant) => {
            return (
              <Card restaurant={restaurant} key={restaurant.id} />
            )   
            })
          }           
        </div>
  )
}
