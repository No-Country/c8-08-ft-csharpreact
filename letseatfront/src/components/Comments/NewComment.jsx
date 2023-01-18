import React, { useState } from 'react'
import styles from './styles/NewComment.module.css'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'


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
        // await axios.post(UrlUser, input, {
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   }
        // })
        // await axios({
        //   method: 'post',
        //   url: UrlUser,
        //   data: formData,
        //   header: {
        //     // 'Accept': 'application/json',
        //     'Content-Type': 'multipart/form-data'
        //   }
        // })
          // .then(function (response) { console.log(response) })
          // .catch(function (response) { console.log(response) })
        setInput({
          description: "",
          dishId: 0,
          })
        console.log(input)
      }

  return (
    <div className={ styles.container }>
        <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
            <textarea className={styles.inputTextarea} type="text" name="comment" value={input.comment} placeholder="Tell us" onChange={(e) => handleInputChange(e)}/>
            <div className={ styles.boxIcon }> 
                <AiFillCheckCircle className={styles.icon} />
                <AiFillCloseCircle className={styles.icon} onClick={handleClickComment}/>
            </div>
        </form>
    </div>
  )
}
