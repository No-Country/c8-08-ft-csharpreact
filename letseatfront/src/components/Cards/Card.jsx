import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styles from "./styles/Card.module.css"
import { AiFillStar } from 'react-icons/ai'
// import { TfiHeart } from 'react-icons/tfi'
import { Link } from "react-router-dom";

export default function Card ({ restaurant }) {
//   useEffect(() => {
//     return async () => {
//       console.log(restaurant)
//   }
// }, [restaurant]);
  
  let sumaScore = 0;

  restaurant.scoreBusinesses.map((el) => { 
    return (
      sumaScore+=(el.score)
    )
  })

  let score = sumaScore/restaurant.scoreBusinesses.length
  
  return (
    <Link to={`/detail/${restaurant.id}`}>
    <div className={styles.container}>
        <div className={styles.picture} 
            style={{background: `url(${restaurant.pictureBusinesses[0].urlImg})`, backgroundSize: "cover"
        }}>
            {/* <TfiHeart className={styles.like} /> */}
        </div>
        <div className={styles.boxTitle}>
            <h3 className={styles.name}>{restaurant.name}</h3>
            <div className={styles.boxScore}>
                <AiFillStar/>
                <h5 className={styles.details}>{Math.trunc(score)}</h5>
            </div>
        </div>
        <h5 className={styles.details}>{restaurant.description}</h5>
    </div>
    </Link>
  )
}

Card.propTypes = { num: PropTypes.any }
