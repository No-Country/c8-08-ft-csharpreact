import React from "react"
import styles from "./styles/Gallery.module.css"

export default function Gallery ({pictureBusinesses}) {
    return (
        <div className={styles.container}>
            <div className={styles.boxPictures}>
                {
                pictureBusinesses 
                &&
                pictureBusinesses.map((img) => {
                    return (
                    <div className={styles.picture}
                    style={{background: `url(${img.urlImg})`, backgroundSize: "cover"}}
                    key={img.id}>
                    </div>
                    )})
                }
            </div>
        </div>
    )
}
