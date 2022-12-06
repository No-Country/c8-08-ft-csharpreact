import React, { useEffect } from "react"
import styles from "../Cards/styles/Cards.module.css"
import Card from "../Cards/Card.jsx"
// import { useDispatch, useSelector } from "react-redux";
// import { getAllRestaurants } from "../../redux/actions/index.js";
import HttpCliente from "../../services/HttpCliente";
//import axios from "axios"
import { useState } from "react";
//const UrlAllRestaurant = "https://lets-eat.somee.com/api/Business/allBusines?PageNumber=1&PageSize=50"


export default function Cards () {
  // const restaurants = useSelector((state) => state.restaurants);
  // const dispatch = useDispatch();
  const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    // dispatch(getAllRestaurants());
    HttpCliente.get('/Business/allBusines?PageNumber=1&PageSize=50').then(response=>{
      console.log("busines",response);
      setAllRestaurants(response.data.data);
  },err=>{console.error(err)})
    
}, []);
  console.log("state",allRestaurants);
  return (
        <div className={styles.container}>
          {
            allRestaurants.map((restaurant) => {
              return (
                <Card restaurant={restaurant} key={restaurant.id} />
              )   
              })
          }
          <h1>holasdfd</h1>         
        </div>
  )
}
