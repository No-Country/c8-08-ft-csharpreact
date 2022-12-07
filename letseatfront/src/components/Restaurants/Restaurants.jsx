import React, { useEffect, useState } from "react"
import CardRestaurant from "./CardRestaurant"
import NewDish from "../Dishes/NewDish";
import styles from "./styles/Restaurants.module.css"
import HttpCliente from "../../services/HttpCliente";
import EditRestaurant from "./EditRestaurant";
import EditOwnerPerfil from "../UserPerfil/EditOwnerPerfil";
import EditDish from "../Dishes/EditDish";
export default function Restaurants ({ OwnerId, setShow, show }) {
    const [business,setInput] = useState([]);

    useEffect(()=>{
        HttpCliente.get('/Business/BusineByUser').then(response=>{
            // console.log("busines",response);
            setInput(response.data.data);
        },err=>{console.error(err)})
    },[]);

    const [restaurant, setRestaurant] = useState(false)
    const [restaurantId, setRestaurantId] = useState(false)
    const [restaurantName, setRestaurantName] = useState(false)
    const [detailDish, setDetailDish] = useState(false)
 
        return (
            <div className={styles.container}>
                {
                    show === "restaurantList" &&
                    <>
                    { business.length>0 ?
                        <>
                            <h1>Mis restaurantes/negocios</h1>
                            {business && business.map( 
                                ( num,index) => <CardRestaurant num={num} key={index} setShow={setShow} setRestaurantId={setRestaurantId} setRestaurantName={setRestaurantName} setRestaurant={setRestaurant} setDetailDish={setDetailDish}/>)
                            }
                        </>
                        : <h1>Cargando...</h1>
                    }
                    </>
                }
                {
                    show === "formNewDish" &&
                    <NewDish restaurantId={restaurantId} restaurantName={restaurantName} setShow={setShow} OwnerId={OwnerId} />
                }
                {
                    show === "editRestaurant" &&
                    <EditRestaurant restaurant={restaurant} setShow={setShow} OwnerId={OwnerId}/>
                }    
                {
                    show === "editPerfil" &&
                    <EditOwnerPerfil setShow={setShow} OwnerId={OwnerId} />
                }   
                {
                    show === "editDish" &&
                    <EditDish setShow={setShow} detailDish={detailDish}/> 
                }             
            </div>
        )

    
}
