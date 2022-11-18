import Link from 'next/link'
import React from 'react'
import styles from "../styles/signUp_LogIn.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'

export default function LogIn () {
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
            <h1 className={styles.mainTitle}>Hi there!</h1>
            <h3 className={styles.secondaryTitle}>Welcome back</h3>
            <input className={styles.input} type="text" placeholder="E-mail" />
            <input className={styles.input} type="password" placeholder="Password" />
            <button className={styles.button}>LOG IN</button>
            <h5 className={styles.text}>New member?</h5>
            <Link href={"/signUp"} className={styles.link}>Sign Up</Link>
            </div>
        </div>
  )
}
