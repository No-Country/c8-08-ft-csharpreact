import React, { useState } from "react"
import styles from "./styles/NavBar.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import { Link, Outlet, useNavigate } from "react-router-dom"

export default function NavBarUser ({ rol }) {
  const [showOptions, setShowOptions] = useState(false)
  const navigate = useNavigate();

  function logOut () {
    localStorage.removeItem('security_token')
    // navigate("/");
  }


  function handleClick () {
    setShowOptions(!showOptions)
  }

  return (
        <>
        <div className={styles.containerUser}>
            <Link to={"/"}>
                <div className={styles.boxIcon}>
                    <MdOutlineFoodBank className={styles.icon} />
                    <h1 className={styles.name}>Let{"'"}s eat!</h1>
                </div>
            </Link>
            <div className={styles.boxUser}>
                <HiUserCircle className={styles.iconUser} onClick={handleClick}/>
            </div>
        </div>
        {
            showOptions
              ? <div className={styles.boxOptionsUser}>
               {
                      rol === 2 
                      && <Link className={styles.optionlink} to={"/profile/U/:user_id"}>NormalUser Profile</Link>
                    }
                    {
                      rol === 3
                      && <Link className={styles.optionlink} to={"/profile/O/:user_id"}>OwnerUser Profile</Link>
                    }
                      <Link className={styles.optionlink} to={"/"}  onClick={logOut}>Log Out</Link>
            </div>
              : null
        }

        <Outlet />
        </>
  )
}
