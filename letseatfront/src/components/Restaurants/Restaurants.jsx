import React, { useEffect, useState } from "react"
import CardRestaurant from "./CardRestaurant"
import styles from "./styles/Restaurants.module.css"
import HttpCliente from "../../services/HttpCliente";
export default function Restaurants () {
    //const numeritos = [1,2,3,4]
    const [business,setInput] = useState([]);

    useEffect(()=>{
        HttpCliente.get('/Business/BusineByUser').then(response=>{
            console.log("busines",response);
            setInput(response.data.data);
        },err=>{console.error(err)})
    },[]);

    if(business.length>0){
        return (
            <div className={styles.container}>
                {business && business.map( 
                  ( num,index) => <CardRestaurant num={num} key={index} />
                 )}
            </div>
        )
    }else{
        return (
            <div className={styles.container}>
               <h1>No hay Negocios Registrados!</h1>
            </div>
        )
    }
    
}
