import React, { useState } from 'react'
import styles from './styles/NewComment.module.css'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import Swal from "sweetalert2"

import axios from "axios"
const UrlNewComment = "https://lets-eat.somee.com/api/Commet"

export default function NewComment ({dishId, setShowFormNewComment, showFormNewComment }) {

      function handleClickComment () {
        setShowFormNewComment(!showFormNewComment)
      }

      const [input, setInput] = useState({
        description: "",
        dishId: dishId,
      })
    
      const handleInputChange = (e) => {
        e.preventDefault()
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          await axios.post(UrlNewComment, input)
          .then(function (response) { console.log(response) })
          Swal.fire(
            'Gracias!',
            'Tu comentario es de mucha ayuda!',
            'success'
          )
          // setShowFormScore(!showFormScore)

          console.log(input)
        } catch (error) {
          console.log(error)
        }
        setInput({
          description: "",
          dishId: 0,
          })
      }

  return (
    <div className={ styles.container }>
        <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
            <textarea className={styles.inputTextarea} type="text" name="description" value={input.description} placeholder="Comentar..." onChange={(e) => handleInputChange(e)}/>
            <div className={ styles.boxIcon }> 
                <button><AiFillCheckCircle className={styles.icon} /></button>
                <AiFillCloseCircle className={styles.icon} onClick={handleClickComment}/>
            </div>
        </form>
    </div>
  )
}
