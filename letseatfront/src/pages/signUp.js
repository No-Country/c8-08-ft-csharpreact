import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import styles from "../styles/signUp.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
// import formData from "form-data"
import axios from "axios"
const UrlUser = "https://lets-eat.somee.com/api/Customer"

export default function SignUp () {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    UserName: "",
    LastName: "",
    Gender: "",
    Phone: "",
    // urlPhoto: "",
    Email: "",
    Password: "",
    Birthday: ""
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
    formData.append('Email',e.target.Email.value)
    formData.append('Password',e.target.Password.value)
    formData.append('Birthday',e.target.Birthday.value)
    for (let [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
    e.preventDefault()
    await axios.post(UrlUser, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
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
      UserName: "",
      LastName: "",
      Gender: "",
      Phone: "",
      //   urlPhoto: "",
      Email: "",
      Password: "",
      Birthday: ""
    })
    console.log(input)
    navigate("/logIn");
  }

  return (
        <div className={ styles.container }>
            <div className={styles.boxIcon}>
                <Link to={"/"} className={styles.boxLink}>
                  <MdOutlineFoodBank className={styles.icon} />
                  <h1 className={styles.name}>Let{"'"}s eat!</h1>
                </Link>
            </div>
            <div className={ styles.boxForm }>
                <h1 className={styles.mainTitle}>Bienvenido!</h1>
                <h3 className={styles.secondaryTitle}>Crear una cuenta</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="UserName" value={input.UserName} placeholder="Nombre" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="LastName" value={input.LastName} placeholder="Apellido" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <select className={styles.inputSelect} name='Gender' onChange={(e) => handleInputChange(e)}>
                            <option className={styles.input} value="">Género</option>
                            <option value="female">Femenino</option>
                            <option value="male">Masculino</option>
                        </select>
                        <input className={styles.input} type="tel" name="Phone" value={input.Phone} placeholder="Teléfono" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <div className={styles.tercerBox}>
                          <h5 className={styles.subtitle}>Elegir una foto de Perfil</h5>
                          <input className={styles.inputdiferentes} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
                        </div>
                        <div className={styles.tercerBox}>
                          <h5 className={styles.subtitle}>Fecha de Nacimiento</h5>
                          <input className={styles.inputdiferentes} type="date" name="Birthday" value={input.Birthday} onChange={(e) => handleInputChange(e)} />
                        </div>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="email" name="Email" value={input.Email} placeholder="Email" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="password" name="Password" value={input.Password} placeholder="Contraseña" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <button className={styles.button}>SIGN UP</button>
                </form>
                <h5 className={styles.text}>Already a member?</h5>
                <Link to={"/logIn"} className={styles.link}>Log In</Link>
                <Link className={styles.link} to={"/signUpOwner"}>
                    Do you sell food?
                </Link>
            </div>
        </div>
  )
}
