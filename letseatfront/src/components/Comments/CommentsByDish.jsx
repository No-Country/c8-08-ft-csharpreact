import React from "react"
import styles from "./styles/CommentsByDish.module.css"
import { useEffect, useState } from "react"
import HttpCliente from "../../services/HttpCliente"
import MiniCardComment from "./MiniCardComment"

export default function CommentsByDish ({idDish}) {
    const [comment, setComment] = useState([]);

    useEffect(()=>{
        HttpCliente.get(`/Dish/${idDish}/ByComment`).then(response=>{
             console.log("respuesta coment",response);
             setComment(response.data.data);
         },err=>{  console.log("errr",err);  })
         
    },[idDish])
    /* const numeritos = [{
        numero:1, 
        comment:  "s",
        score:3,},
        {numero:2, 
        comment: "Praesent dignissim quam sit amet magna imperdiet posuere. Sed eget efficitur eros. Integer congue iaculis neque vitae accumsan. Mauris hendrerit iaculis dolor pellentesque efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        score: 5,},
        {numero:3, 
        comment: "Vivamus elementum mauris gravida scelerisque scelerisque. Nam aliquet tempus venenatis. Donec lectus magna, tincidunt dictum odio ac, accumsan posuere libero.",
        score:4,},
        {numero:4, 
        comment: "Aliquam interdum enim velit, commodo lobortis felis vehicula quis. Aenean quis dictum nunc. Donec molestie suscipit nisi, vitae pretium mi porta eget. Ut cursus urna quis odio posuere, at elementum magna feugiat. Etiam maximus, est sed aliquet pretium, erat ex cursus augue, vel iaculis odio ipsum sed erat. Maecenas suscipit iaculis quam eget pulvinar. Donec ultricies id turpis ut fermentum.",
        score:4,},] */
      
    console.log( "concomen",comment);
    return (
       
        <div className={styles.container}>
            {
                comment.length === 0 ? 
                <h1 className={styles.title}>Sin comentarios</h1>
                :
                <>
                <h1 className={styles.title}>Todos los comentarios</h1>
                <div className={styles.boxComments}>

                    { 
                        comment.map((item,index)=> <MiniCardComment num={item} key ={index} />)
                    }
                </div>
                </>
            }
           
        </div>
    )
}
