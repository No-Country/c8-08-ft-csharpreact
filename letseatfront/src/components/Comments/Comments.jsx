import React from "react"
import CardComment from "./CardComment"
import styles from "./styles/Comments.module.css"
import { useEffect, useState } from "react"
import HttpCliente from "../../services/HttpCliente"


export default function Comments () {
    const [commet, setInput] = useState([]);

    useEffect(()=>{
        HttpCliente.get('/Commet').then(response=>{
             console.log("respuesta coment",response);
             setInput(response.data.data);
         },err=>{  console.log("errr",err);  })
         
    },[])
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
      
    console.log( "concomen",commet);
    return (
       
        <div className={styles.container}>
        
        { commet.map((item,index)=> <CardComment num={item} key ={index} ></CardComment>)

        }
           
        </div>
    )
}
