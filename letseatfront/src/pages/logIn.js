import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
// import { useDispatch } from "react-redux"
import styles from "../styles/logIn.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import Swal from "sweetalert2"
import HttpCliente from "../services/HttpCliente"
// import { postLogIn } from '../redux/actions/index.js'

//import axios from "axios"
const UrlUser = "https://lets-eat.somee.com/api/Login"


export default function LogIn ({ singUp, rol }) {
  const navigate = useNavigate();

  useEffect(() => {
    if(singUp === true) {
      if(rol === 2) {
        navigate("/profile/U/:user_id");
     } 
      if(rol === 3)
        navigate("/profile/O/:user_id");
      }
  })


  const [input, setInput] = useState({
    email: "",
    password: ""
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
    try {
      HttpCliente.post(UrlUser, input)
      .then(function (response) { 
        window.localStorage.setItem("security_token",response.data.data);
        console.log(response) })
        navigate("/");
      } catch (error) {
      console.log("error",error)
      Swal.fire({
        title: "Login Error",
        text: "Your email or your password are not correct. Try again please!",
        icon: "error",
        showCancelButton: false,
        confirmButtonColor: "#3c8c6c",
        confirmButtonText: "Okey",
    });
    }
   
    // dispatch(postLogIn(input))
    setInput({
      email: "",
      password: ""
    })
  }

  return (
        <div className={ styles.container }>
            <div className={ styles.boxForm }>
            <h1 className={styles.mainTitle}>Hi there!</h1>
            <h3 className={styles.secondaryTitle}>Welcome back</h3>
            <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
              <input className={styles.inputLogIn} type="email" name="email" value={input.email} placeholder="E-mail" onChange={(e) => handleInputChange(e)} />
              <input className={styles.inputLogIn} type="password" name="password" value={input.password} placeholder="Password" onChange={(e) => handleInputChange(e)} />
              <button className={styles.button}>LOG IN</button>
            </form>
            <h5 className={styles.text}>New member?</h5>
            <Link to={"/signUp"} className={styles.link}>Sign Up</Link>
            </div>
            <div className={styles.boxIcon}>
              <Link to={"/"} className={styles.boxLink}>
                <MdOutlineFoodBank className={styles.icon} />
                <h1 className={styles.name}>Let{"'"}s eat!</h1>
              </Link>
            </div>

        </div>
  )
}
