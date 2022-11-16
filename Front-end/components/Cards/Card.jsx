import styles from "../Cards/styles/card.module.css"

export default function Card({num}) {
    return(
        <div className={styles.container}>
            <div className={styles.picture}>
                <h3>Soy una imagen! :)</h3>
            </div>
            <h3 className={styles.name}>Restaurante numero {num}!</h3>
            <h5 className={styles.details}>Aqui irá algo de detalle sobre el restaurante</h5>
        </div>
    )
}
