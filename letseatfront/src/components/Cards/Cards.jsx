import React, { useEffect } from "react"
import styles from "../Cards/styles/Cards.module.css"
import Card from "../Cards/Card.jsx"
// import { useDispatch, useSelector } from "react-redux";
// import { getAllRestaurants } from "../../redux/actions/index.js";

import axios from "axios"
import { useState } from "react";
const UrlAllRestaurant = "http://platano-001-site1.ftempurl.com/api/Business/allBusines?PageNumber=1&PageSize=50"


export default function Cards () {
  // const restaurants = useSelector((state) => state.restaurants);
  // const dispatch = useDispatch();
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    // dispatch(getAllRestaurants());
    return async () => {
      await axios.get(UrlAllRestaurant)
      .then((response) => setAllRestaurants(response.data.data))
  }
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
