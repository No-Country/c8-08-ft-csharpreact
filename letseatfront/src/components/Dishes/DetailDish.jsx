import React, { useState } from "react"
import styles from "./styles/DetailDish.module.css"
import {IoMdPhotos} from "react-icons/io"
import { FaCommentDots } from 'react-icons/fa'
import FormScore from "../Score/FormScore"
import NewComment from "../Comments/NewComment"

export default function DetailDish ({ detailDish, showPhotos, setShowPhotos }) {
  const [showFormNewComment, setShowFormNewComment] = useState(false)
  const [showFormScore, setShowFormScore] = useState(false)

  function handleClick () {
    setShowPhotos(!showPhotos)
  }

  function handleClickComment () {
    setShowFormNewComment(!showFormNewComment)
    if(showFormScore === true && showFormNewComment === false) {
      setShowFormScore(false)
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
              <FormScore showFormScore={showFormScore} setShowFormScore={setShowFormScore} showFormNewComment={showFormNewComment} setShowFormNewComment={setShowFormNewComment}/>
              {
                !showFormNewComment ? <FaCommentDots className={styles.iconComment} onClick={handleClickComment} />
                : <NewComment dishId={detailDish.id} showFormNewComment={showFormNewComment} setShowFormNewComment={setShowFormNewComment}/>
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
