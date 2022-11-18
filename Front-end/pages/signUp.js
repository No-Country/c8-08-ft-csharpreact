import Link from 'next/link'
import React from 'react'
import styles from "../styles/signUp_LogIn.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'

export default function SignUp () {
  return (
        <div className={ styles.container }>
            <Link href={"/"}>
            <div className={styles.boxIcon}>
                <MdOutlineFoodBank className={styles.icon} />
                <h1 className={styles.name}>Let{"'"}s eat!</h1>
            </div>
            </Link>
            <div className={styles.line}></div>
            <div className={ styles.form }>
                <h1 className={styles.mainTitle}>Welcome!</h1>
                <h3 className={styles.secondaryTitle}>Create a Account</h3>
                <input className={styles.input} type="text" placeholder="Name" />
                <input className={styles.input} type="text" placeholder="E-mail" />
                <input className={styles.input} type="password" placeholder="Password" />
                <button className={styles.button}>SIGN UP</button>
                <h5 className={styles.text}>Already a member?</h5>
                <Link href={"/logIn"} className={styles.link}>Log In</Link>
                <Link className={styles.link} href={"https://www.airbnb.com.ar"}>
                    Do you sell food?
                </Link>
            </div>
        </div>
  )
}
