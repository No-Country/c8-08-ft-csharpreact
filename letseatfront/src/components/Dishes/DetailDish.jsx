import React, { useState } from "react"
import styles from "./styles/DetailDish.module.css"
import {IoMdPhotos} from "react-icons/io"
import { FaCommentDots } from 'react-icons/fa'
import FormScore from "../Score/FormScore"
import NewComment from "../Comments/NewComment"
import Swal from "sweetalert2"


export default function DetailDish ({ detailDish, showPhotos, setShowPhotos, rol, singUp }) {
  const [showFormNewComment, setShowFormNewComment] = useState(false)
  const [showFormScore, setShowFormScore] = useState(false)

  function handleClick () {
    setShowPhotos(!showPhotos)
  }

  function handleClickComment () {
    if(!singUp) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops... no puedes comentar!',
        html:
            'Primero debes hacer' + 
            '<a href="/logIn"> LogIn</a> ',
        footer: '<a href="/signUp">¿Aún no tienes una cuenta?</a>',
        confirmButtonColor: "#3c8c6c",
      })
    } else {
      setShowFormNewComment(!showFormNewComment)
      // if(showFormScore === true && showFormNewComment === false) {
      //   setShowFormScore(false)
      // }  
    }
  }
  

  return (
      <>
      <div className={ styles.container }>
          <h1 className={styles.title}>Detalles:</h1>
          <h1 className={styles.details}>{detailDish.description}</h1>
          <h1 className={styles.price}>${detailDish.prece}</h1>

          <div className={styles.boxButton}>
            <div className={styles.boxIcon}>
              {
                  rol !== 3 &&
                  <>
                    <FormScore singUp={singUp} rol={rol} showFormScore={showFormScore} setShowFormScore={setShowFormScore} showFormNewComment={showFormNewComment} setShowFormNewComment={setShowFormNewComment}/>
                    {
                      !showFormNewComment ? <FaCommentDots className={styles.iconComment} onClick={handleClickComment} />
                      : <NewComment dishId={detailDish.id} showFormNewComment={showFormNewComment} setShowFormNewComment={setShowFormNewComment}/>
                    }
                  </>
              }
            </div>
            {
              showPhotos ? <button className={styles.buttonPhotos} onClick={handleClick}><IoMdPhotos className={styles.iconPhotos}/> VER MENOS FOTOS</button>
              : <button className={styles.buttonPhotos} onClick={handleClick}><IoMdPhotos className={styles.iconPhotos}/> VER MÁS FOTOS</button>

            }
              </div>
      </div>
      </>
  )
}
