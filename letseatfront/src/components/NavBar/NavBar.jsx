import React, { useState } from "react"
import styles from "./styles/NavBar.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import { Link, Outlet } from "react-router-dom";
// import Filters from "../Filters/Filters";

export default function NavBar ({ rol, singUp }) {
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
            <div className={styles.boxUser}>
              {
                !singUp &&
                <Link className={styles.link} to={"/signUpOwner"}>Do you sell food?</Link>
              }
                <HiUserCircle className={styles.iconUser} onClick={handleClick}/>
            </div>
        </div>
        {
            showOptions
              ? <div className={styles.boxOptionsUser}>
                {
                  singUp ?
                  <>
                    {
                      rol === 2 
                      && <Link className={styles.optionlink} to={"/profile/U/:user_id"}>NormalUser Profile</Link>
                    }
                    {
                      rol === 3
                      && <Link className={styles.optionlink} to={"/profile/O/:user_id"}>OwnerUser Profile</Link>
                    }
                      <Link className={styles.optionlink} to={"/"}>Log Out</Link>
                  </>
                  :
                  <>
                      <Link className={styles.optionlink} to={"/signUp"}>Sign Up</Link>
                      <Link className={styles.optionlink} to={"/logIn"}>Log In</Link>
                  </>
                }
            </div>
              : null
        }
        <Outlet />
        </>
  )
}
