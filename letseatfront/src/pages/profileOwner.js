import React, { useState } from "react";
import styles from '../styles/profileOwner.module.css'
import { AiTwotoneEdit } from 'react-icons/ai'
import NewRestaurant from "../components/Restaurants/NewRestaurant";
import Restaurants from "../components/Restaurants/Restaurants";

export default function ProfileOwner () {
  const [showFormNewRestaurant, setShowFormNewRestaurant] = useState(false)

  function handleClick () {
    setShowFormNewRestaurant(!showFormNewRestaurant)
  }

    return (
        <div className={ styles.container }>
            <div className={ styles.boxPersonal }>
                <div className={ styles.boxInfo }>
                    <img className={ styles.imageProfile } src="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png" alt="profileImg"/>
                    <h1 className={ styles.name }>Nombre y apellido del Dueño</h1>
                    <h1 className={ styles.email }>emaildueño@gmail.com</h1>
                    <h1 className={ styles.phone }>Phone: 6757625</h1>
                    <h1 className={ styles.address }>Avenida Siempreviva 123</h1>
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