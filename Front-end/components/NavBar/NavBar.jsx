import React from "react"
import styles from "./styles/Navbar.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import Link from "next/link"

export default function NavBar () {
  return (
        <div className={styles.container}>
            <div className={styles.navBar}>
                <div className={styles.boxIcon}>
                    <MdOutlineFoodBank className={styles.icon} />
                    <h1 className={styles.name}>Let{"'"}s eat!</h1>
                </div>
                <div className={styles.boxUser}>
                <Link className={styles.link} href={"https://www.airbnb.com.ar"}>Do you sell food?</Link>
                <HiUserCircle className={styles.icon}/>
                </div>
            </div>
        </div>
  )
}
