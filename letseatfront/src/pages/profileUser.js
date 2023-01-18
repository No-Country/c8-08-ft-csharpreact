import React, { useState,useEffect } from "react";
import styles from '../styles/profileUser.module.css'
import { AiTwotoneEdit } from 'react-icons/ai'
import Comments from "../components/Comments/Comments";
import HttpCliente from "../services/HttpCliente"





export default function ProfileUser () {
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
   
    
    return (
        <div className={ styles.container }>
            <div className={ styles.boxPersonal }>
                <div className={ styles.boxInfo }>
                    <img className={ styles.imageProfile } src={user.urlPhoto} alt="profileImg"/>
                    <h1 className={ styles.name }  >{user.userName} {user.lastName}</h1>
                    <h1 className={ styles.email }>{user.user.email}ddd</h1>
                    <h1 className={ styles.phone }>Phone: {user.phone}</h1>
                    <h1 className={ styles.gender }>Gender: {user.gender}</h1>
                    <h1 className={ styles.birthday }>Birthday:{user.birthday.slice(0,10)}</h1>
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