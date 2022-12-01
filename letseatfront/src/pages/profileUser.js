import React from "react";
import styles from '../styles/profileUser.module.css'
import { AiTwotoneEdit } from 'react-icons/ai'
import Comments from "../components/Comments/Comments";

export default function ProfileUser () {

    return (
        <div className={ styles.container }>
            <div className={ styles.boxPersonal }>
                <div className={ styles.boxInfo }>
                    <img className={ styles.imageProfile } src="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png" alt="profileImg"/>
                    <h1 className={ styles.name }>Nombre y apellido Usuario</h1>
                    <h1 className={ styles.email }>emailuser@gmail.com</h1>
                    <h1 className={ styles.phone }>Phone: 8878738</h1>
                    <h1 className={ styles.gender }>Gender: Female/Male</h1>
                    <h1 className={ styles.birthday }>Birthday: 1972-08-07</h1>
                    <button className={ styles.buttonEdit }><AiTwotoneEdit className={ styles.iconEdit } /></button>
                   </div>
            </div>
            <div className={ styles.boxPrincipal }>
            <div className={ styles.boxSecondary }>            
                <Comments /> 
            </div>
            </div>
        </div>
    )
}