import Link from 'next/link'
import React, { useState } from 'react'
// import { useDispatch } from "react-redux"
import styles from "../styles/signUp_LogIn.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
// import { postLogin } from '../redux/actions'
import axios from "axios"
const UrlUser = "https://81df-190-2-211-112.sa.ngrok.io/api/Login"

export default function LogIn () {
  // const dispatch = useDispatch()
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
    // const input = {
    //   e_mail: valuesInput.e_mail,
    //   password: valuesInput.password
    // }
    await axios.post(UrlUser, input)
      .then(function (response) { console.log(response) })
      .catch(function (err) { console.log(err) })
    setInput({
      email: "",
      password: ""
    })
  }
  // dispatch(postLogin(input))

  return (
        <div className={ styles.container }>
           <Link href={"/"}>
            <div className={styles.boxIcon}>
                <MdOutlineFoodBank className={styles.icon} />
                <h1 className={styles.name}>Let{"'"}s eat!</h1>
            </div>
            </Link>
            <div className={styles.line}></div>
            <div className={ styles.boxForm }>
            <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
              <h1 className={styles.mainTitle}>Hi there!</h1>
              <h3 className={styles.secondaryTitle}>Welcome back</h3>
              <input className={styles.inputLogIn} type="email" name="email" value={input.email} placeholder="E-mail" onChange={(e) => handleInputChange(e)} />
              <input className={styles.inputLogIn} type="password" name="password" value={input.password} placeholder="Password" onChange={(e) => handleInputChange(e)} />
              <button className={styles.button}>LOG IN</button>
            </form>
            <h5 className={styles.text}>New member?</h5>
            <Link href={"/signUp"} className={styles.link}>Sign Up</Link>
            </div>
        </div>
  )
}
