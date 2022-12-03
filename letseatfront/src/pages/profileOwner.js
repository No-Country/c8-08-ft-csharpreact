import React, { useState,useEffect } from "react";
import styles from '../styles/profileOwner.module.css'
import { AiTwotoneEdit } from 'react-icons/ai'
import NewRestaurant from "../components/Restaurants/NewRestaurant";
import Restaurants from "../components/Restaurants/Restaurants";
import HttpCliente from "../services/HttpCliente";
export default function ProfileOwner () {
    const [user,setUser] = useState({
        userName: '',
        lastName: '',
        user: '',
        phone: '',
        gender: '',
        urlPhoto: '',
        birthday: '',

    });
    useEffect(()=>{
       
           HttpCliente.get('/User/ByUser').then(response=>{
                console.log(response);
                setUser(response.data.data);
            },err=>{  console.log("errr",err);  })
            
    },[])
  const [showFormNewRestaurant, setShowFormNewRestaurant] = useState(false)

  function handleClick () {
    setShowFormNewRestaurant(!showFormNewRestaurant)
  }

    return (
        <div className={ styles.container }>
            <div className={ styles.boxPersonal }>
                <div className={ styles.boxInfo }>
                    <img className={ styles.imageProfile } src={user.urlPhoto} alt="profileImg"/>
                    <h1 className={ styles.name }>{user.userName} {user.lastName} </h1>
                    <h1 className={ styles.email }>{user.user.email}</h1>
                    <h1 className={ styles.phone }>Phone: {user.phone}</h1>
                    <h1 className={ styles.address }>direccion</h1>
                    <button className={ styles.buttonEdit }><AiTwotoneEdit className={ styles.iconEdit } /></button>
                    {
                !showFormNewRestaurant
                   && <button className={ styles.button } onClick={handleClick}>NEW RESTAURANT</button>
                    }
                   </div>
            </div>
            <div className={ styles.boxPrincipal }>
            <div className={ styles.boxSecondary }>            
            {
                showFormNewRestaurant
                ? <NewRestaurant className={ styles.modal } showFormNewRestaurant={showFormNewRestaurant} setShowFormNewRestaurant={setShowFormNewRestaurant} />
                : <Restaurants />
            }
                
                </div>
            </div>
        </div>
    )
}