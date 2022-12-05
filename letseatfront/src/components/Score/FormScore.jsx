import React, { useState } from "react"
import styles from "./styles/FormScore.module.css"
import { StarsRating } from "./StarsRating"
import { AiOutlineStar, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

import axios from "axios"
const UrlNewScore = ""

export default function FormScore ({ setShowFormScore, showFormScore, showFormNewComment, setShowFormNewComment }) {
    const [score, setScore] = useState({
        value: 0
      })
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.post(UrlNewScore, score)
          .then(function (response) { console.log(response) })
        } catch (error) {
          console.log(error)
        }
    }

    function handleClick () {
      setShowFormScore(!showFormScore)
          if(showFormScore === true && showFormNewComment === false) {
            setShowFormNewComment(false)}
    }


    return (
        <div className={styles.container}>
          {
            !showFormScore ? <AiOutlineStar className={styles.iconStar} onClick={handleClick} />
            : 
            <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
            <StarsRating score={score} setScore={setScore} />
            <div className={ styles.boxIcon }> 
              <AiFillCheckCircle className={styles.icon} />
              <AiFillCloseCircle className={styles.icon} onClick={handleClick}/>
            </div> 
            </form>
          }
        </div>
    )
}
