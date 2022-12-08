import React, { useState } from 'react'
import styles from './styles/NewDish.module.css'
import HttpCliente from "../../services/HttpCliente";
import Swal from "sweetalert2"

const UrlEditDish = "/Dish/Update/"

export default function EditDish ({setShow, restaurantId, detailDish}) {

    function handleClick () {
        setShow("restaurantList")
      }

      const [input, setInput] = useState({
        Name: detailDish.name,
        Description: detailDish.description,
        Prece: detailDish.prece,
        BusinessId: detailDish.businessId,
        // Img: [],
      })

      console.log(input)

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


      const handleSubmit = (e) => {
        formData.append('img',img)
        formData.append('Name',e.target.Name.value)
        formData.append('Description',e.target.Description.value)
        formData.append('Prece',e.target.Prece.value)
        formData.append('BusinessId',e.target.BusinessId.value)
        // for (let [key, value] of formData) {
        //   console.log(`${key}: ${value}`)
        // }
        e.preventDefault()
        HttpCliente.put(`${UrlEditDish}${detailDish.id}`, formData)
          .then(function (response) { console.log(response) })
          .catch(function (response) { console.log(response) })
        setInput({
          Name: "",
          Description: "",
          Prece: 0,
          BusinessId: 0,
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

        <h1 className={styles.mainTitle}>Editar platillo {detailDish.name}</h1>
                <h3 className={styles.secondaryTitle}>Modifica la información que mostraras</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.secondaryBox}>
                        <input className={styles.inputName} type="text" name="Name" value={input.Name} placeholder="Nombre" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="number" name="Prece" value={input.Prece} placeholder="Precio" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
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
