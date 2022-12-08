import React, { useState } from 'react'
import styles from './styles/EditPerfil.module.css'
import axios from "axios"
import Swal from "sweetalert2"

const UrlEditUserPerfil = "https://lets-eat.somee.com/api/Customer/"

export default function EditUserPerfil ({setShow, show, user}) {

    function handleClick () {
        setShow(!show)
      }

      const [input, setInput] = useState({
        UserName: user.userName,
        LastName: user.lastName,
        Gender: user.gender,
        Phone: user.phone,
        // urlPhoto: "",
        Birthday: user.birthday
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
        formData.append('Birthday',e.target.Birthday.value)
            // for (let [key, value] of formData) {
        //   console.log(`${key}: ${value}`)
        // }
        e.preventDefault()
        await axios.put(`${UrlEditUserPerfil}${user.id}`, formData, {
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
          Birthday: ""
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

        <h1 className={styles.mainTitle}>Editar perfil</h1>
                <h3 className={styles.secondaryTitle}>Modifica tus datos personales</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="UserName" value={input.UserName} placeholder="Name" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="LastName" value={input.LastName} placeholder="Last name" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <select className={styles.inputSelect} name='Gender' onChange={(e) => handleInputChange(e)}>
                            <option className={styles.input} value="">Choose a Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <input className={styles.input} type="tel" name="Phone" value={input.Phone} placeholder="Phone" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="date" name="Birthday" value={input.Birthday} onChange={(e) => handleInputChange(e)} />
                    </div>
                    <button className={styles.button}>GUARDAR CAMBIOS</button>
                    <button className={styles.buttonCancel} onClick={handleClick}>CANCELAR</button>
                </form>

        </div>
    </div>
  )
}
