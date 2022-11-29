import React, { useState } from "react"
import styles from "./styles/NavBar.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import Link from "next/link"

export default function NavBar () {
  const [showOptions, setShowOptions] = useState(false)

  function handleClick () {
    setShowOptions(!showOptions)
  }

  return (
        <>
        <div className={styles.container}>
            <Link href={"/"}>
                <div className={styles.boxIcon}>
                    <MdOutlineFoodBank className={styles.icon} />
                    <h1 className={styles.name}>Let{"'"}s eat!</h1>
                </div>
            </Link>
            <div className={styles.boxUser}>
                <Link className={styles.link} href={"/signUpOwner"}>Do you sell food?</Link>
                <HiUserCircle className={styles.iconUser} onClick={handleClick}/>
            </div>
        </div>
        {
            showOptions
              ? <div className={styles.boxOptionsUser}>
            <Link className={styles.optionlink} href={"/signUp"}>Sign Up</Link>
            <Link className={styles.optionlink} href={"/logIn"}>Log In</Link>
            </div>
              : null
        }
        </>
  )
}
