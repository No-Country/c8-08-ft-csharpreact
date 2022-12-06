import React, { useState } from 'react'
import styles from './styles/NewDish.module.css'
import axios from "axios"
import Swal from "sweetalert2"

const UrlEditRestaurant = "http://platano-001-site1.ftempurl.com/api/Business/update/"

export default function EditDish ({setShow, OwnerId, restaurantId }) {

    function handleClick () {
        setShow("restaurantList")
      }

      const [input, setInput] = useState({
        Name: "",
        Description: "",
        Dpart: "",
        Mund: "",
        Adress: "",
        // Img: [],
      })

      var formData = new FormData(); 

      const [img,setImg]= useState(null)
    
      const handleInputChange = (e) => {
        e.preventDefault()
        if (e.target.type === "file") {
          setImg(e.target.files[0])
        }
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async (e) => {
        formData.append('Img',img)
        formData.append('Name',e.target.Name.value)
        formData.append('Description',e.target.Description.value)
        formData.append('Dpart',e.target.Dpart.value)
        formData.append('Mund',e.target.Mund.value)
        formData.append('Adress',e.target.Adress.value)
        formData.append('SellerId', OwnerId)
        // for (let [key, value] of formData) {
        //   console.log(`${key}: ${value}`)
        // }
        e.preventDefault()
        await axios.put(`${UrlEditRestaurant}${restaurantId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(function (response) { console.log(response) })
          .catch(function (response) { console.log(response) })
        setInput({
          Name: "",
          Description: "",
          Dpart: "",
          Mund: "",
          Adress: "",
          SellerId: 0
          // Img: [],
          })
        setShow("restaurantList")
        Swal.fire({
          title:'Buen trabajo!',
          text:'Cambios guardados exitosamente!',
          confirmButtonColor: "#3c8c6c",}
        )

      }
    
    
  return (
    <div className={ styles.container }>
        <div className={ styles.boxForm }>
       {/* <IoIosCloseCircleOutline className={styles.iconClose} onClick={handleClick} /> */}

        <h1 className={styles.mainTitle}>Editar platillo</h1>
                <h3 className={styles.secondaryTitle}>Modifica la información que mostraras</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="Name" value={input.Name} placeholder="Nombre" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="Adress" value={input.Adress} placeholder="Dirección" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="Mund" value={input.Mund} placeholder="Municipio" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="Dpart" value={input.Dpart} placeholder="Departamento" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <textarea className={styles.inputTextarea} type="text" name="Description" value={input.Description} placeholder="Descripción" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <button className={styles.button}>GUARDAR CAMBIOS</button>
                    <button className={styles.buttonCancel} onClick={handleClick}>CANCELAR</button>
                </form>

        </div>
    </div>
  )
}
