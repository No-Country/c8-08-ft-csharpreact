import React, { useState } from "react"
import styles from "./styles/DetailDish.module.css"
import { FaCommentDots } from 'react-icons/fa'
import FormScoreDish from "../Score/FormScoreDish"
import NewComment from "../Comments/NewComment"
import Swal from "sweetalert2"
import CommentsByDish from "../Comments/CommentsByDish";


export default function DetailDish ({ detailDish, showPhotos, setShowPhotos, rol, singUp }) {
  const [showFormNewComment, setShowFormNewComment] = useState(false)
  const [showFormScore, setShowFormScore] = useState(false)

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
        <div className={ styles.boxDetail }>
          <h1 className={styles.title}>Detalles:</h1>
          <h1 className={styles.details}>{detailDish.description}</h1>
          <h1 className={styles.price}>${detailDish.prece}</h1>
          </div>
          <div className={styles.boxButton}>
            <div className={styles.boxIcon}>
              {
                  rol !== 3 &&
                  <>
                    <FormScoreDish idDish={detailDish.id} singUp={singUp} rol={rol} showFormScore={showFormScore} setShowFormScore={setShowFormScore} showFormNewComment={showFormNewComment} setShowFormNewComment={setShowFormNewComment}/>
                    {
                      !showFormNewComment ? <FaCommentDots className={styles.iconComment} onClick={handleClickComment} />
                      : <NewComment dishId={detailDish.id} showFormNewComment={showFormNewComment} setShowFormNewComment={setShowFormNewComment}/>
                    }
                  </>
              }
            </div>

              </div>
              {
            <CommentsByDish idDish={detailDish.id}/>
          }
      </div>
      </>
  )
}
