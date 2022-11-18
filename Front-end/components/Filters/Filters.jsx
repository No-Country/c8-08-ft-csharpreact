import React from "react"
import styles from "./styles/Filters.module.css"
import { MdOutlineFoodBank } from 'react-icons/md'
import { HiUserCircle, HiSearchCircle } from 'react-icons/hi'
import Link from "next/link"

export default function Filters () {
  const Provincia = ["Mendoza", "San Luis", "Bs.As."]
  const Departamento = ["Departamento 1", "Departamento 2", "Departamento 3"]

  return (
        <div className={styles.container}>
            <div className={styles.filtros}>
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
                <div className={styles.search}>
                    <input className={styles.inputName} type="text" placeholder="Restaurant Name..." />
                    <HiSearchCircle className={styles.iconSearch}/>
                </div>

            </div>
        </div>
  )
}
