import React, { useState } from 'react'
import styles from './styles/NewRestaurant.module.css'
// import { IoIosCloseCircleOutline } from 'react-icons/io'
// import { useDispatch } from 'react-redux'

export default function NewRestaurant ({setShowFormNewRestaurant, showFormNewRestaurant }) {
    // const dispatch = useDispatch()

    function handleClick () {
        setShowFormNewRestaurant(!showFormNewRestaurant)
      }

      const [input, setInput] = useState({
        Name: "",
        Description: "",
        Dpart: "",
        Mund: "",
        Adress: "",
        // Img: [],
      })
    
      const handleInputChange = (e) => {
        e.preventDefault()
        // if (e.target.type === "file") {
        //   setInput({ ...input, [e.target.name]: e.target.files[0] })
        // }
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
          Name: "",
          Description: "",
          Dpart: "",
          Mund: "",
          Adress: "",
          // Img: [],
        })
        console.log(input)
      }

  return (
    <div className={ styles.container }>
        <div className={ styles.boxForm }>
       {/* <IoIosCloseCircleOutline className={styles.iconClose} onClick={handleClick} /> */}

        <h1 className={styles.mainTitle}>You're almost done!</h1>
                <h3 className={styles.secondaryTitle}>Add a new restaurant</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="Name" value={input.Name} placeholder="Name" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="Adress" value={input.Adress} placeholder="Address" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="Mund" value={input.Mund} placeholder="Municipality" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="Dpart" value={input.Dpart} placeholder="Department" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <textarea className={styles.inputTextarea} type="text" name="Description" value={input.Description} placeholder="Description" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <button className={styles.button}>CREATE NEW RESTAURANT</button>
                    <button className={styles.buttonCancel} onClick={handleClick}>CANCEL</button>
                </form>

        </div>
    </div>
  )
}
