import React, { useState } from "react"
import styles from "./styles/FormScore.module.css"
import { StarsRating } from "./StarsRating"
import { AiOutlineStar, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import Swal from "sweetalert2"

import axios from "axios"
const UrlNewScore = "https://lets-eat.somee.com/api/Score/Dish"

export default function FormScoreRestaurant ({ idDish, rol, singUp, setShowFormScore, showFormScore, showFormNewComment, setShowFormNewComment }) {
  const scoreName = "score";  
  const [score, setScore] = useState({
        score: 0,
        dishId: idDish
      })
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.post(UrlNewScore, score)
          .then(function (response) { console.log(response) })
          Swal.fire(
            'Gracias!',
            'Tu calificación es de mucha ayuda!',
            'success'
          )
          setShowFormScore(!showFormScore)

        } catch (error) {
          console.log(error)
        }
    }

    function handleClick () {
      if(!singUp) {
        Swal.fire({
          icon: 'warning',
          title: 'Oops... no puedes calificar!',
          html:
              'Primero debes hacer' + 
              '<a href="/logIn"> LogIn</a> ',
          footer: '<a href="/signUp">¿Aún no tienes una cuenta?</a>',
          confirmButtonColor: "#3c8c6c",
        })
      } else {
        setShowFormScore(!showFormScore)
        // if(showFormScore === true && showFormNewComment === false) {
        //   setShowFormNewComment(false)}
      }
    }

    return (
        <div className={styles.container}>
          {
            !showFormScore ? <AiOutlineStar className={styles.iconStar} onClick={handleClick} />
            : 
            <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
            <StarsRating score={score} setScore={setScore} scoreName={scoreName}/>
            <div className={ styles.boxIcon }> 
            <button><AiFillCheckCircle className={styles.icon} /></button>
              <AiFillCloseCircle className={styles.icon} onClick={handleClick}/>
            </div> 
            </form>
          }
        </div>
    )
}
