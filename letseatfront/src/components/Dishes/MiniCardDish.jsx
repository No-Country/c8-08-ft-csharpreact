import React from "react"
import styles from "./styles/MiniCardDish.module.css"
import { AiTwotoneEdit, AiOutlineDelete } from 'react-icons/ai'
import Swal from "sweetalert2"

import axios from "axios"
const UrlDeleteRestaurant = "https://lets-eat.somee.com/api/Business/Delecte/"


export default function MiniCardDish ({dish, setShow, setRestaurantId}) {

    function handleClickEditRestaurant () {
    setShow("editRestaurant")
    setRestaurantId(dish.id)
    }

    function handleDelete(e) { 
    e.preventDefault()
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#A7D129',
        cancelButtonColor: 'rgb(43, 43, 44);',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`${UrlDeleteRestaurant}${dish.id}`)
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success',
        )
        }
    })
    }

    return (
        <div className={styles.container}>
            <h1 className={ styles.text }>{dish.name}</h1>
            <div className={styles.boxIcons}>
                <button className={ styles.buttonIcon } onClick={handleClickEditRestaurant}>
                    <AiTwotoneEdit className={ styles.icon } />
                </button>
                <button className={ styles.buttonIcon }>
                    <AiOutlineDelete className={ styles.icon } onClick={handleDelete} />
                </button>
            </div>
        </div>
    )
   
}