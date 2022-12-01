import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
// import { useDispatch } from "react-redux"
import styles from "../styles/logIn.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import Swal from "sweetalert2"
// import { postLogIn } from '../redux/actions/index.js'

import axios from "axios"
const UrlUser = "http://platano-001-site1.ftempurl.com/api/Login"


export default function LogIn () {
  // const dispatch = useDispatch()
  const navigate = useNavigate();

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
      await axios.post(UrlUser, input)
      .then(function (response) { console.log(response) })
      navigate("/");
    } catch (error) {
      console.log(error)
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
