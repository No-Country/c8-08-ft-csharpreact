import React, { useState } from "react"
import styles from "./styles/NavBar.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import { Link, Outlet } from "react-router-dom"
// import { HiSearchCircle } from 'react-icons/hi'

export default function NavBarSimple () {
  const [showOptions, setShowOptions] = useState(false)

  function handleClick () {
    setShowOptions(!showOptions)
  }

  return (
        <>
        <div className={styles.container}>
            <Link to={"/"}>
                <div className={styles.boxIcon}>
                    <MdOutlineFoodBank className={styles.icon} />
                    <h1 className={styles.name}>Let{"'"}s eat!</h1>
                </div>
            </Link>
            {/* <div className={styles.search}>
                    <input className={styles.inputName} type="text" placeholder="Restaurant Name..." />
                    <HiSearchCircle className={styles.iconSearch}/>
            </div> */}

            <div className={styles.boxUser}>
                <Link className={styles.link} to={"/signUpOwner"}>Do you sell food?</Link>
                <HiUserCircle className={styles.iconUser} onClick={handleClick}/>
            </div>
        </div>
        {
            showOptions
              ? <div className={styles.boxOptionsUser}>
            <Link className={styles.optionlink} to={"/signUp"}>Sign Up</Link>
            <Link className={styles.optionlink} to={"/logIn"}>Log In</Link>
            <Link className={styles.optionlink} to={"/profile/U/:user_id"}>NormalUser Profile</Link>
            <Link className={styles.optionlink} to={"/profile/O/:user_id"}>OwnerUser Profile</Link>
            <Link className={styles.optionlink} to={"/"}>Log Out</Link>
            </div>
              : null
        }

        <Outlet />
        </>
  )
}
