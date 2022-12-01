import React, { useState } from 'react'
import styles from './styles/NewComment.module.css'
// import { IoIosCloseCircleOutline } from 'react-icons/io'
// import { useDispatch } from 'react-redux'

export default function NewComment ({setShowFormNewRestaurant, showFormNewRestaurant }) {
    // const dispatch = useDispatch()

    function handleClick () {
        setShowFormNewRestaurant(!showFormNewRestaurant)
      }

      const [input, setInput] = useState({
        comment: "",
        score: 0,
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
          .then(function (response) { console.log(response) })
          .catch(function (response) { console.log(response) })
        setInput({
          comment: "",
          score: 0,
        })
        console.log(input)
      }

  return (
    <div className={ styles.container }>
        <div className={ styles.boxForm }>
       {/* <IoIosCloseCircleOutline className={styles.iconClose} onClick={handleClick} /> */}

        <h1 className={styles.mainTitle}>New Comment!</h1>
                <h3 className={styles.secondaryTitle}>How was your experience in this restaurant/local?</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <textarea className={styles.inputTextarea} type="text" name="comment" value={input.comment} placeholder="Tell us" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="number" name="score" value={input.score} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <button className={styles.button}>SEND</button>
                    <button className={styles.buttonCancel} onClick={handleClick}>CANCEL</button>
                </form>
        </div>
    </div>
  )
}
