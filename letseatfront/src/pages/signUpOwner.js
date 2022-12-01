import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import styles from "../styles/signUpOwner.module.css"
// import formData from "form-data"
import axios from "axios"
import Ad from '../components/Ad/Ad.jsx'

const UrlUser = "http://platano-001-site1.ftempurl.com/api/Vendedor"

export default function SignUpOwner () {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    UserName: "",
    LastName: "",
    Gender: "",
    Phone: "",
    // urlPhoto: "",
    Email: "",
    Password: "",
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
    e.preventDefault()
    formData.append('UrlPhoto',img)
    formData.append('userName',e.target.UserName.value)
    formData.append('lastName',e.target.LastName.value)
    formData.append('Gender',e.target.Gender.value)
    formData.append('Phone',e.target.Phone.value)
    formData.append('Email',e.target.Email.value)
    formData.append('Password',e.target.Password.value)
    formData.append('Adress',e.target.Adress.value)
    for (let [key, value] of formData) {
      console.log(`${key}: ${value}`)
    }
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
      Adress: ""
    })
    console.log(input)
    navigate("/profile/O/:user_id");
  }

  return (
    <>
    <Ad />
    <section  id="formSignUpOwner">
        <div className={ styles.container }>
              <div className={ styles.boxForm }>
                <h1 className={styles.mainTitle}>Welcome!</h1>
                <h3 className={styles.secondaryTitle}>Create an account as owner</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                    <input className={styles.input} type="text" name="UserName" value={input.UserName} placeholder="Name" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="LastName" value={input.LastName} placeholder="Last name" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                    <select className={styles.input} name='Gender' onChange={(e) => handleInputChange(e)}>
                            <option value="">Choose a gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <input className={styles.input} type="tel" name="Phone" value={input.Phone} placeholder="Phone" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} accept="image/*" type="file" name="UrlPhoto" value={input.UrlPhoto} onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="Adress" value={input.Adress} placeholder="Address" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                    <input className={styles.input} type="email" name="Email" value={input.Email} placeholder="email" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="password" name="Password" value={input.Password} placeholder="password" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <button className={styles.button}>ACCEPT AND CONTINUE</button>
                </form>
                <h5 className={styles.text}>Already a member?</h5>
                <Link to={"/logIn"} className={styles.link}>Log In</Link>
            </div>
        </div>

        </section>
        </>
  )
}
