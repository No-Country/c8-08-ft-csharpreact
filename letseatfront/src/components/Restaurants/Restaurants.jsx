import React, { useEffect, useState } from "react"
import CardRestaurant from "./CardRestaurant"
import NewDish from "../Dishes/NewDish";
import styles from "./styles/Restaurants.module.css"
import HttpCliente from "../../services/HttpCliente";
import EditRestaurant from "./EditRestaurant";
import EditOwnerPerfil from "../UserPerfil/EditOwnerPerfil";
export default function Restaurants ({ OwnerId, setShow, show }) {
    const [business,setInput] = useState([]);

    useEffect(()=>{
        HttpCliente.get('/Business/BusineByUser').then(response=>{
            // console.log("busines",response);
            setInput(response.data.data);
        },err=>{console.error(err)})
    },[]);

    const [restaurantId, setRestaurantId] = useState(false)
 
        return (
            <div className={styles.container}>
                {
                    show === "restaurantList" &&
                    <>
                    { business.length>0 ?
                        <>
                            <h1>Mis restaurantes/negocios</h1>
                            {business && business.map( 
                                ( num,index) => <CardRestaurant num={num} key={index} setShow={setShow} setRestaurantId={setRestaurantId} />)
                            }
                        </>
                        : <h1>Cargando...</h1>
                    }
                    </>
                }
                {
                    show === "formNewDish" &&
                    <NewDish restaurantId={restaurantId} setShow={setShow} OwnerId={OwnerId} />
                }
                {
                    show === "editRestaurant" &&
                    <EditRestaurant restaurantId={restaurantId} setShow={setShow} OwnerId={OwnerId}/>
                }    
                {
                    show === "editPerfil" &&
                    <EditOwnerPerfil setShow={setShow} OwnerId={OwnerId} />
                }                
            </div>
        )

    
}
