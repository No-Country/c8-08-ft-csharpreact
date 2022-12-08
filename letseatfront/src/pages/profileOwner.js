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
        adress: '',
        id: 0
    });
    useEffect(()=>{
       
           HttpCliente.get('/User/ByUser').then(response=>{
                setUser(response.data.data);
            },err=>{  console.log("errr",err);  })
    },[])

  const [showFormNewRestaurant, setShowFormNewRestaurant] = useState(false)
  const [show, setShow] = useState("restaurantList") //formNewDish -- editRestaurant -- editPerfil -- editDish

  function handleClick () {
    setShowFormNewRestaurant(!showFormNewRestaurant)
  }

  function handleClickEditar () {
    setShow("editPerfil")
  }

    return (
        <div className={ styles.container }>
            <div className={ styles.boxPersonal }>
                <div className={ styles.boxInfo }>
                    <img className={ styles.imageProfile } src={user.urlPhoto} alt="profileImg"/>
                    <div className={ styles.boxData }>
                    <h1 className={ styles.name }>{user.userName} {user.lastName} </h1>
                    <h1 className={ styles.email }>{user.user.email}</h1>
                    <h1 className={ styles.phone }>Teléfono: {user.phone}</h1>
                    <h1 className={ styles.address }>Dirección: {user.adress}</h1>
                    <button className={ styles.buttonEdit } onClick={handleClickEditar}><AiTwotoneEdit className={ styles.iconEdit } /></button>
                </div>
            </div>
            </div>
            <div className={ styles.boxPrincipal }>
            {
                !showFormNewRestaurant
                   && <button className={ styles.button } onClick={handleClick}>NUEVO RESTAURANTE</button>
                    }
            <div className={ styles.boxSecondary }>            
            {
                showFormNewRestaurant
                ? <NewRestaurant className={ styles.modal } showFormNewRestaurant={showFormNewRestaurant} setShowFormNewRestaurant={setShowFormNewRestaurant} OwnerId={user.id} />
                : <Restaurants OwnerId={user.id} setShow={setShow} show={show}/>
            }
                
                </div>
            </div>
        </div>
    )
}