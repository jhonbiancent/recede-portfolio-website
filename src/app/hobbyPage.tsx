import React from 'react'
import hobbyStyle from "./hobbyPageCSS.module.css"
import Image from "next/image";
import image1 from "./assets/project-showcase/hobby.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faLightbulb} from "@fortawesome/free-solid-svg-icons"; 


const hobbyPage = () => {
  return (
      <div className={hobbyStyle.hobbyMainPageContainer}>
          <span className={hobbyStyle.text}>I build  <span className={hobbyStyle.textHighlight}> modern and performant</span> websites & softwares.</span>
          <div className={hobbyStyle.imageContainer}>
              <Image className={hobbyStyle.image} src={image1}  alt="coding img"/>
          </div>
          <div>
              <span className={hobbyStyle.textHighlightHeader}>I turn ideas into modern solutions</span>
                <p className={hobbyStyle.text2}>Clean code. Elegant design. Real impact.</p>
          </div>
          <div className={hobbyStyle.cardContainer}>
              <div className={hobbyStyle.card}>
                  <div className={hobbyStyle.titleArea}><p className={hobbyStyle.icon}><FontAwesomeIcon icon={faLightbulb}/> Concept and Ideation</p></div>
                  <p className={hobbyStyle.description}>Where ideas are shaped with intention and creativity.</p>
                  <p className={hobbyStyle.description2}>Design begins with understanding.</p>
              </div>
              <div className={hobbyStyle.card}>
                  <div className={hobbyStyle.titleArea}><p className={hobbyStyle.icon}><FontAwesomeIcon icon={faComputer}/> Execution and Development</p></div>
                  <p className={hobbyStyle.description}>Transforming ideas into functional digital experiences..</p>
                  <p className={hobbyStyle.description2}>Where ideas become reality.</p>
              </div>
          </div>
    </div>
  )
}

export default hobbyPage
