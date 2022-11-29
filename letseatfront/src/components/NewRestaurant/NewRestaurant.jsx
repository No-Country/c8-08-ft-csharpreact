import React, { useState } from 'react'
import styles from './styles/NewRestaurant.module.css'
import { IoIosCloseCircleOutline } from 'react-icons/io'



export default function NewRestaurant ({setShowFormNewRestaurant, showFormNewRestaurant }) {
    function handleClick () {
        setShowFormNewRestaurant(!showFormNewRestaurant)
      }

    const [input, setInput] = useState({
        UserName: "",
        LastName: "",
        Gender: "",
        Phone: "",
        // urlPhoto: "",
        Email: "",
        Password: "",
        Birthday: ""
      })
    
      const handleInputChange = (e) => {
        e.preventDefault()
        // if (e.target.type === "file") {
        //   setInput({ ...input, [e.target.name]: e.target.files[0] })
        // }
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        // await axios.post(UrlUser, input, {
        //   headers: {
        //     "Content-Type": "multipart/form-data"
        //   }
        // })
        // await axios({
        //   method: 'post',
        //   url: UrlUser,
        //   data: formData,
        //   header: {
        //     // 'Accept': 'application/json',
        //     'Content-Type': 'multipart/form-data'
        //   }
        // })
          .then(function (response) { console.log(response) })
          .catch(function (response) { console.log(response) })
        setInput({
          UserName: "",
          LastName: "",
          Gender: "",
          Phone: "",
          //   urlPhoto: "",
          Email: "",
          Password: "",
          Birthday: ""
        })
        console.log(input)
      }

  return (
    <div className={ styles.container }>
        <div className={ styles.boxForm }>
       <IoIosCloseCircleOutline className={styles.iconClose} onClick={handleClick} />

        <h1 className={styles.mainTitle}>You're almost done!</h1>
                <h3 className={styles.secondaryTitle}>Add a new restaurant</h3>
                <form className={ styles.form } onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="text" name="UserName" value={input.UserName} placeholder="Name" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="text" name="LastName" value={input.LastName} placeholder="Last name" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <select className={styles.inputSelect} name='Gender' onChange={(e) => handleInputChange(e)}>
                            <option className={styles.input} value="">Choose a Gender</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <input className={styles.input} type="tel" name="Phone" value={input.Phone} placeholder="Phone" onChange={(e) => handleInputChange(e)}/>
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} accept="image/*" type="file" name="urlPhoto" value={input.urlPhoto} onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="date" name="Birthday" value={input.Birthday} onChange={(e) => handleInputChange(e)} />
                    </div>
                    <div className={styles.secondaryBox}>
                        <input className={styles.input} type="email" name="Email" value={input.Email} placeholder="email" onChange={(e) => handleInputChange(e)}/>
                        <input className={styles.input} type="password" name="Password" value={input.Password} placeholder="password" onChange={(e) => handleInputChange(e)} />
                    </div>
                    <button className={styles.button}>SIGN UP</button>
                </form>

        </div>
    </div>
  )
}
