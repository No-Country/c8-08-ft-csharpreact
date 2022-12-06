import React, { useEffect, useState } from "react"
import styles from "../styles/detail.module.css"
import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { useParams } from "react-router-dom"
import {IoMdPhotos} from "react-icons/io"

import Gallery from "../components/Gallery/Gallery"
import Dishes from "../components/Dishes/Dishes"
import FormScore from "../components/Score/FormScore"

import HttpCliente from "../services/HttpCliente";
const UrlRestaurantDetail = "/Business"

export default function Detail ({ rol, singUp }) {
  let {restaurant_id} = useParams();

  const [detail, setDetail] = useState({
    adress: "",
    description: "",
    dpart: "",
    id: 0,
    mund: "",
    name: "",
    pictureBusinesses: [],
    scoreBusinesses: [],
    sellerId: 0
  })

try {
  useEffect(() => {
      HttpCliente.get(`${UrlRestaurantDetail}/${restaurant_id}`)
        .then((response) => {
          setDetail(response.data.data);
          console.log("respuesta detail",response.data.data);
        },err=>{console.error(err)})
  }, [restaurant_id]);
} catch (error) {
  console.log(error)
}

let score = 0;

if(detail.scoreBusinesses.length !== 0) {
  const allScore = detail.scoreBusinesses
  let sumaScore = 0

    allScore.map((el) =>
        sumaScore+=(el.score)
    )
    
    score = sumaScore/allScore.length
}

const [showFormScore, setShowFormScore] = useState(false)
const [showPhotos, setShowPhotos] = useState(false)

function handleClick () {
  setShowPhotos(!showPhotos)
}

  return (
      <>
      <div className={ styles.container }>
        <div className={styles.boxPrincipal}>
          {
            detail.pictureBusinesses.length !== 0 && 
            <div className={styles.boxIntroduction} style={{background: `url(${detail.pictureBusinesses[0].urlImg})`, backgroundSize:"cover"}}>
              <div className={styles.boxInfo}>
                <div className={styles.boxTop}>
                <h1 className={styles.name}>{detail.name}</h1>
                <div className={styles.boxScore}>
                  <AiFillStar className={styles.iconScore}/>
                  <h5 className={styles.score}>{Math.trunc(score)}</h5>
                </div>
              </div>
              <div className={styles.boxButton}>
                {
                  rol !== 3 &&
                  <FormScore showFormScore={showFormScore} setShowFormScore={setShowFormScore} singUp={singUp} rol={rol} />
                }
                {
                  showPhotos ? <button className={styles.buttonPhotos} onClick={handleClick}><IoMdPhotos className={styles.iconPhotos}/> VER MENOS FOTOS</button>
                  : <button className={styles.buttonPhotos} onClick={handleClick}><IoMdPhotos className={styles.iconPhotos}/> VER MÁS FOTOS</button>

                }
              </div>
              </div>
            </div>
          }
          <div className={styles.boxSecondary}>
            <h1 className={styles.title}>Descripción:</h1>
            <h1 className={styles.details}>{detail.description}</h1>
            <h1 className={styles.title}>Encontrarás a {detail.name} en:</h1>
            <div className={styles.boxDeptMun}>
              <h5 className={styles.details}>{detail.dpart}</h5>
              <BsDot className={styles.dot}/>
              <h5 className={styles.details}>{detail.mund}</h5>
            </div>
            <h5 className={styles.details}>Dirección: {detail.adress}</h5>
          </div>
        </div>
        {
          showPhotos && <Gallery pictureBusinesses={detail.pictureBusinesses}/>
        }
        <Dishes singUp={singUp} rol={rol} />

      </div>
      </>
  )
}
