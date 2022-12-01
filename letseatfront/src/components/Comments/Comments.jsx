import React from "react"
import CardComment from "./CardComment"
import styles from "./styles/Comments.module.css"

export default function Comments () {
    const numeritos = [{
        numero:1, 
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus arcu eget tellus finibus, in ullamcorper ex sagittis. Aliquam semper eu nulla eget venenatis. Suspendisse eu mollis lorem, ac malesuada mauris. Aenean vitae leo eget nisl congue auctor vestibulum tempus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sagittis, quam sed viverra vestibulum, ex sem elementum dui, non tristique turpis sem at tellus. Proin ac bibendum risus.",
        score:3,},
        {numero:2, 
        comment: "Praesent dignissim quam sit amet magna imperdiet posuere. Sed eget efficitur eros. Integer congue iaculis neque vitae accumsan. Mauris hendrerit iaculis dolor pellentesque efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
        score: 5,},
        {numero:3, 
        comment: "Vivamus elementum mauris gravida scelerisque scelerisque. Nam aliquet tempus venenatis. Donec lectus magna, tincidunt dictum odio ac, accumsan posuere libero.",
        score:4,},
        {numero:3, 
        comment: "Aliquam interdum enim velit, commodo lobortis felis vehicula quis. Aenean quis dictum nunc. Donec molestie suscipit nisi, vitae pretium mi porta eget. Ut cursus urna quis odio posuere, at elementum magna feugiat. Etiam maximus, est sed aliquet pretium, erat ex cursus augue, vel iaculis odio ipsum sed erat. Maecenas suscipit iaculis quam eget pulvinar. Donec ultricies id turpis ut fermentum.",
        score:4,},]


    return (
        <div className={styles.container}>
            {numeritos && numeritos.map( 
               num => <CardComment num={num} key={num.toString()} />
             )}
        </div>
    )
}
