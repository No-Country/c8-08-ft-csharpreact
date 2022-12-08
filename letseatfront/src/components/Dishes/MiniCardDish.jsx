import React from "react"
import styles from "./styles/MiniCardDish.module.css"
import {  AiOutlineDelete } from 'react-icons/ai'
import Swal from "sweetalert2"

import HttpCliente from "../../services/HttpCliente";
const UrlDeleteDish = "/Dish/Delete/"


export default function MiniCardDish ({
    dish, 
    // setShow, 
    // setDetailDish
}) {

    // function handleClickEditDish () {
    // setShow("editDish")
    // setDetailDish(dish)
    // }

    console.log(dish)

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
            HttpCliente.delete(`${UrlDeleteDish}${dish.id}`)
            .then((response) => {
                console.log(response.data.data);
    },err=>{console.error(err)})
    Swal.fire(
        'Borrado!',
        'Tu platillo fue borrado exitosamente.',
        'success',
        ) 
    }
})
}

    return (
        <div className={styles.container}>
            <h1 className={ styles.text }>{dish.name}</h1>
            <div className={styles.boxIcons}>
                {/* <button className={ styles.buttonIcon } onClick={handleClickEditDish}>
                    <AiTwotoneEdit className={ styles.icon } />
                </button> */}
                <button className={ styles.buttonIcon }>
                    <AiOutlineDelete className={ styles.icon } onClick={handleDelete} />
                </button>
            </div>
        </div>
    )
   
}