import React, { useState } from 'react'
import styles from './styles/EditPerfil.module.css'
import axios from "axios"
import Swal from "sweetalert2"

const UrlEditPerfilOwner = "http://platano-001-site1.ftempurl.com/api/Business/update/"

export default function EditOwnerPerfil ({setShow, OwnerId }) {

    function handleClick () {
        setShow("restaurantList")
      }

      const [input, setInput] = useState({
        UserName: "",
        LastName: "",
        Gender: "",
        Phone: "",
        // urlPhoto: "",
        Adress: ""
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
        formData.append('UrlPhoto',img)
        formData.append('userName',e.target.UserName.value)
        formData.append('lastName',e.target.LastName.value)
        formData.append('Gender',e.target.Gender.value)
        formData.append('Phone',e.target.Phone.value)
        formData.append('Adress',e.target.Adress.value)
            // for (let [key, value] of formData) {
        //   console.log(`${key}: ${value}`)
        // }
        e.preventDefault()
        await axios.put(`${UrlEditPerfilOwner}${OwnerId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
          .then(function (response) { console.log(response) })
          .catch(function (response) { console.log(response) })
        setInput({
          UserName: "",
          LastName: "",
          Gender: "",
          Phone: "",
          //   urlPhoto: "",
          Adress: ""
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
        <h1 className={styles.mainTitle}>Editar perfil</h1>
                <h3 className={styles.secondaryTitle}>Modifica tus datos personales</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="UserName" value={input.UserName} placeholder="Nombre" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="LastName" value={input.LastName} placeholder="Apellido" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                    <select className={styles.inputSelect} name='Gender' onChange={(e) => handleInputChange(e)}>
                            <option value="">Choose a gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <input className={styles.input} type="tel" name="Phone" value={input.Phone} placeholder="Teléfono" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} accept="image/*" type="file" name="UrlPhoto" value={input.UrlPhoto} onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="Adress" value={input.Adress} placeholder="Dirección" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <button className={styles.button}>GUARDAR CAMBIOS</button>
                    <button className={styles.buttonCancel} onClick={handleClick}>CANCELAR</button>
                </form>

        </div>
    </div>
  )
}
