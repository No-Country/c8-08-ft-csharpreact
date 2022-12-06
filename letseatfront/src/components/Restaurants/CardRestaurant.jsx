import React, { useState } from "react"
import styles from "./styles/CardRestaurants.module.css"
import { AiTwotoneEdit, AiOutlineDelete } from 'react-icons/ai'
import { ImSpoonKnife } from "react-icons/im"
import { BsChevronDown, BsChevronUp } from "react-icons/bs"
import Swal from "sweetalert2"

import axios from "axios"
import ListDishes from "../Dishes/ListDishes"
const UrlDeleteRestaurant = "http://platano-001-site1.ftempurl.com/api/Business/Delecte/"


export default function CardRestaurant ({num, setShow, setRestaurantId}) {

    function handleClickNewDish () {
        setShow("formNewDish")
        setRestaurantId(num.id)
    }

    function handleClickEditRestaurant () {
    setShow("editRestaurant")
    setRestaurantId(num.id)
    }

    const [showDishes, setShowDishes] = useState(true)

    function handleClickShowDishes () {
        setShowDishes(!showDishes)
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
            axios.delete(`${UrlDeleteRestaurant}${num.id}`)
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
                !showDishes && <ListDishes restaurant_id={num.id}/>

            }
        </div>
    )
   
}