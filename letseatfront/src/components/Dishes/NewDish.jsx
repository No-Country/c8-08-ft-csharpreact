import React, { useState } from 'react'
import styles from './styles/NewDish.module.css'
import axios from "axios"
import Swal from "sweetalert2"

const UrlNewDish = "http://platano-001-site1.ftempurl.com/api/Dish"

export default function NewDish ({setShow, restaurantId }) {

    function handleClick () {
      setShow("restaurantList")
      }

      const [input, setInput] = useState({
        Name: "",
        Description: "",
        Prece: "",
        // Img: [],
      })

      var formData = new FormData(); 

      const [img,setImg]= useState(null)
    
      const handleInputChange = (e) => {
        e.preventDefault()
        if (e.target.name === "Prece") {
          setInput({
            ...input,
            [e.target.name]: e.target.value
          })
          }
        if (e.target.type === "file") {
          setImg(e.target.files[0])
        }

        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async (e) => {
        formData.append('img',img)
        formData.append('Name',e.target.Name.value)
        formData.append('Prece',e.target.Prece.value)
        formData.append('BusinessId', restaurantId)
        // for (let [key, value] of formData) {
        //   console.log(`${key}: ${value}`)
        // }
        e.preventDefault()
        await axios.post(UrlNewDish, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          // .then(function (response) { console.log(response) })
          .catch(function (response) { console.log(response) })
        setInput({
          Name: "",
          Description: "",
          Prece: "",
            // Img: [],
          })
          setShow("formNewDish")
        Swal.fire({
          title:'Buen trabajo!',
          text:'Nuevo platillo creado exitosamente!',
          confirmButtonColor: "#3c8c6c",}
        )

      }
    
    
  return (
    <div className={ styles.container }>
        <div className={ styles.boxForm }>
       {/* <IoIosCloseCircleOutline className={styles.iconClose} onClick={handleClick} /> */}

        <h1 className={styles.mainTitle}>Crear nuevo platillo para el menú</h1>
                <h3 className={styles.secondaryTitle}>Coloca toda la información sobre tu platillo</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <input className={styles.inputName} type="text" name="Name" value={input.Name} placeholder="Nombre" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="Prece" value={input.Prece} placeholder="Precio" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <textarea className={styles.inputTextarea} type="text" name="Description" value={input.Description} placeholder="Descripción" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <button className={styles.button}>CREAR</button>
                    <button className={styles.buttonCancel} onClick={handleClick}>CANCELAR</button>
                </form>

        </div>
    </div>
  )
}
