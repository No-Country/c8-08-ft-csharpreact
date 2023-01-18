import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles/Ad.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import ArrowDown from "../ArrowDown/ArrowDown"

export default function Ad () {
  return (
      <>
        <div className={styles.container}>
            <div className={styles.principalBox} >
                <div className={styles.boxText}>
                    <h1 className={styles.textAd1}>INCREASE YOUR EARNINGS!</h1>
                    <h3 className={styles.textAd2}>You just have to put your food business in Let's Eat</h3>
                    <a href="/signUpOwner/#formSignUpOwner">
                        {/* <button className={styles.button}>LET'S GO!</button> */}
                    </a>
                </div>
                <ArrowDown className={styles.iconArrow} />

                </div>
                <div className={styles.boxIcon}>
                    <Link to={"/"} className={styles.boxLink}>
                        <MdOutlineFoodBank className={styles.icon} />
                        <h1 className={styles.name}>Let{"'"}s eat!</h1>
                    </Link>
                </div>

         {/*     <div className={styles.slider} id="slider">
                  <div className={styles.slider__section}>
                    <img src={food6} alt="restaurant6" className={styles.slider__img}/>
                </div>
            <div className={styles.slider__section}>
                    <img src={food2} alt="restaurant2" className={styles.slider__img}/>
                </div>
                <div className={styles.slider__section}>
                    <img src={food3} alt="restaurant3" className={styles.slider__img}/>
                </div>
                <div className={styles.slider__section}>
                    <img src={food4} alt="restaurant4" className={styles.slider__img}/>
                </div>
                 <div className={styles.slider__section}>
                    <img src={food5} alt="restaurant5" className={styles.slider__img}/>
                </div>
                <div className={styles.slider__section}>
                    <img src={food6} alt="restaurant6" className={styles.slider__img}/>
                </div>
                <div className={styles.slider__section}>
                    <img src={food7} alt="restaurant7" className={styles.slider__img}/>
                </div> 
            </div>*/}
        </div>
      </>
  )
}
