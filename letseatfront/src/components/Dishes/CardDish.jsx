import React, { useState } from "react";
import styles from "./styles/CardDish.module.css";
import DetailDish from "./DetailDish.jsx";
import { AiFillStar } from 'react-icons/ai'
import {GrClose} from "react-icons/gr"
import Gallery from "../Gallery/Gallery"

export default function CardDish ({ dish, rol, singUp }) {
//   useEffect(() => {
//     return async () => {
//       console.log(dish)
//   }
// }, [dish]);
  const [showPhotos, setShowPhotos] = useState(false)
  
  const [detailDish, setDetailDish] = useState({
    businessId: dish.businessId,
    description: dish.description,
    id: dish.id,
    name: dish.name,
    pictureDishes: dish.pictureDishes,
    prece: dish.prece,
    scoreDish: dish.scoreDish
  })


  if (detailDish.pictureDishes.length === 0) {
    setDetailDish({
      ...detailDish,
      pictureDishes: [{urlImg:"../../tools/withoutImage.png"}]
    })
  } 

  let score = 0;

  if(detailDish.scoreDish.length !== 0) {
    const allScore = detailDish.scoreDish
    let sumaScore = 0
  
      allScore.map((el) =>
          sumaScore+=(el.score)
      )
      
      score = sumaScore/allScore.length
  }

  const [showDetail, setShowDetail] = useState(false)

  function handleClick () {
    setShowDetail(!showDetail)
  }

  return (
    <>
    { detailDish.pictureDishes.length !== 0 && 
    <>
      {
        !showDetail ?
        <div className={styles.container1} onClick={handleClick}>
          <div className={styles.picture} 
            style={{background: `url(${detailDish.pictureDishes[0].urlImg})`, backgroundSize: "cover"}}
          >
            <div className={styles.boxTitle}>
              <h3 className={styles.name}>{detailDish.name.toUpperCase()}</h3>
            </div>
          </div>
        </div>  
      :
      <div className={styles.container2}>
        <div className={styles.boxPrincipal}>
          <div className={styles.picture} 
            style={{background: `url(${detailDish.pictureDishes[0].urlImg})`, backgroundSize: "cover"}}
          >
            <div className={styles.boxTitle}>
              <h3 className={styles.name}>{detailDish.name.toUpperCase()}</h3>
              <div className={styles.boxScore}>
              <AiFillStar className={styles.iconScore}/>
              <h5 className={styles.score}>{score}</h5>
            </div>

            </div>
          </div>
          <DetailDish detailDish={detailDish} showPhotos={showPhotos} setShowPhotos={setShowPhotos} singUp={singUp} rol={rol} />
          <GrClose className={styles.iconClose} onClick={handleClick}/>

        </div>
          {
            showPhotos && <Gallery pictureBusinesses={detailDish.pictureDishes}/>
          }
      </div>  
      }
      </>
    }
    </>
  )
}

