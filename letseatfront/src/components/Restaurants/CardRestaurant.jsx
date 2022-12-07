import React, { useState } from "react"
import styles from "./styles/CardRestaurants.module.css"
import { AiTwotoneEdit, AiOutlineDelete } from 'react-icons/ai'
import { ImSpoonKnife } from "react-icons/im"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import Swal from "sweetalert2"

import HttpCliente from "../../services/HttpCliente";
import ListDishes from "../Dishes/ListDishes"
const UrlDeleteRestaurant = "/Business/Delecte/"


export default function CardRestaurant ({num, setShow, setRestaurantName, setRestaurantId, setRestaurant, setDetailDish}) {

    function handleClickNewDish () {
        setShow("formNewDish")
        setRestaurantId(num.id)
        setRestaurantName(num.name)
    }

    function handleClickEditRestaurant () {
    setShow("editRestaurant")
    setRestaurant(num)
    }

    const [showDishes, setShowDishes] = useState(true)

    function handleClickShowDishes () {
        setShowDishes(!showDishes)
        }

    function handleDelete(e) { 
    e.preventDefault()
    Swal.fire({
        title: '¿Estás seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3c8c6c',
        cancelButtonColor: 'rgb(43, 43, 44);',
        confirmButtonText: 'Si, quiero borrarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            HttpCliente.delete(`${UrlDeleteRestaurant}${num.id}`)
            .then((response) => {
                console.log(response.data.data);
    },err=>{console.error(err)})
    Swal.fire(
        'Borrado!',
        'Tu restaurante fue borrado exitosamente.',
        'success',
        ) 
    }
})
}

    return (
        <div className={styles.container}>
            <div className={styles.boxPrincipal}>
                <div className={styles.boxName}>
                    {
                        showDishes ? <BsChevronDown onClick={handleClickShowDishes} className={ styles.iconArrow }/>
                        : <BsChevronUp onClick={handleClickShowDishes} className={ styles.iconArrow } />
                    }
                    <h1 className={ styles.text }>{num.name}</h1>
                </div>
            <div className={styles.boxIcons}>
                <button className={ styles.buttonIcon } onClick={handleClickNewDish} >
                    <ImSpoonKnife className={ styles.icon } />
                </button>
                <button className={ styles.buttonIcon } onClick={handleClickEditRestaurant}>
                    <AiTwotoneEdit className={ styles.icon } />
                </button>
                <button className={ styles.buttonIcon }>
                    <AiOutlineDelete className={ styles.icon } onClick={handleDelete} />
                </button>
            </div>
            </div>
            {
                !showDishes && <ListDishes restaurant_id={num.id} setDetailDish={setDetailDish} setShow={setShow}/>

            }
        </div>
    )
   
}