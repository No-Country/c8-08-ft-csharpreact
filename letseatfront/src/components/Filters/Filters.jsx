import React from "react"
import styles from "./styles/Filters.module.css"
// import { HiSearchCircle } from 'react-icons/hi'

// import {FiFilter} from "react-icons/fi"

export default function Filters () {
//   const [showOptions, setShowOptions] = useState(false)

//   function handleClick () {
//     setShowOptions(!showOptions)
//   }
    // const [name, setName] = useState("");

    // function handleInputChange(e) {
    //     e.preventDefault();
    //     setName(e.target.value.toLowerCase());
    // };

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (name) {
    //         let restaurantByName = allRestaurants.filter(restaurant => restaurant.name.toLowerCase().includes(name.toLowerCase()) )
    //         if(restaurantByName) {
    //             console.log(restaurantByName)
    //             const resultadoBusqueda = [];
    //             resultadoBusqueda.push(restaurantByName)
    //            setAllRestaurants(resultadoBusqueda)
    //         } 
    //     }
    //     setName("");
    // };

  return (
        <div className={styles.container}>
            <h1 className={styles.text1}>Estos son todos los lugares</h1>
            {/* <div className={styles.filtros}>
                <div className={styles.search}>
                    <input className={styles.inputName} type="text" placeholder="Restaurant Name..." onChange={(e) => handleInputChange(e)} />
                </div>
                <HiSearchCircle className={styles.iconSearch} onClick={(e) => handleSubmit(e)}/> */}
                {/* <button className={styles.buttonFilters} onClick={handleClick}><FiFilter className={styles.iconFilter}/>FILTERS</button>
                
                {
                    showOptions
                    ? <>
                    <select className={styles.input} name='provincia'>
                    <option value="">PROVINCE</option>
                    {Provincia && Provincia.map(el =>
                        <option value={el} key={el}>{el.toUpperCase()}</option>
                    )}
                </select>
                <select className={styles.input} name='departamento'>
                    <option value="">DEPARTMENT</option>
                    {Departamento && Departamento.map(el =>
                        <option value={el} key={el}>{el.toUpperCase()}</option>
                    )}
                </select>
                </>
                    : null
                }
                 */}
                


            {/* </div> */}
        </div>
  )
}
