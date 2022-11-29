import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/signUp_LogIn.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import formData from "form-data"
import axios from "axios"
import Carousel from '../components/Carousel/carousel'
const UrlUser = "https://0548-190-2-211-112.sa.ngrok.io/api/Vendedor"

export default function SignUpOwner () {
  const [input, setInput] = useState({
    userName: "",
    lastName: "",
    gender: "",
    phone: "",
    // UrlPhoto: "",
    email: "",
    password: "",
    adress: ""
  })

  const handleInputChange = (e) => {
    e.preventDefault()
    // if (e.target.type === "file") {
    //   setInput({ ...input, [e.target.name]: e.target.files[0] })
    // }
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await axios.post(UrlUser, input, {
    //   headers: FormData.getHeaders()
    // })
    await axios({
      method: 'post',
      url: UrlUser,
      data: formData,
      header: {
        // 'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) { console.log(response) })
      .catch(function (err) { console.log(err) })
    setInput({
      userName: "",
      lastName: "",
      gender: "",
      phone: "",
      // UrlPhoto: "",
      email: "",
      password: "",
      adress: ""
    })
    console.log(input)
  }

  return (
    <>
    <Carousel />
        <div className={ styles.container }>
            <Link href={"/"}>
            <div>
                <h1 className={styles.ad}>Put your food business in</h1>
                <div className={styles.boxIcon}>
                    <MdOutlineFoodBank className={styles.icon} />
                    <h1 className={styles.name}>Let{"'"}s eat!</h1>
                </div>
                <h1 className={styles.ad}>and increase your earnings!</h1>
            </div>

            </Link>
            <div className={styles.line}></div>
            <div className={ styles.boxForm }>
                <h1 className={styles.mainTitle}>Welcome!</h1>
                <h3 className={styles.secondaryTitle}>Create an account as owner</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                    <input className={styles.input} type="text" name="userName" value={input.userName} placeholder="Name" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="lastName" value={input.lastName} placeholder="Last name" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                    <select className={styles.input} name='gender' onChange={(e) => handleInputChange(e)}>
                            <option className={styles.input} value="">Choose a gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <input className={styles.input} type="tel" name="phone" value={input.phone} placeholder="Phone" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        {/* <input className={styles.input} accept="image/*" type="file" name="UrlPhoto" value={input.UrlPhoto} onChange={(e) => handleInputChange(e)}/> */}
                        <input className={styles.input} type="text" name="adress" value={input.adress} placeholder="Address" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                    <input className={styles.input} type="email" name="email" value={input.email} placeholder="email" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="password" name="password" value={input.password} placeholder="password" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <button className={styles.button}>ACCEPT AND CONTINUE</button>
                </form>
                <h5 className={styles.text}>Already a member?</h5>
                <Link href={"/logIn"} className={styles.link}>Log In</Link>
            </div>
        </div>
        </>
  )
}
