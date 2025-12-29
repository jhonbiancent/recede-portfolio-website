import React from 'react'
import hobbyStyle from "./hobbyPageCSS.module.css"
import Image from "next/image";
import image1 from "./assets/project-showcase/hobby.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer, faLightbulb } from "@fortawesome/free-solid-svg-icons"; 
import AnimatedContent from '@/components/AnimatedContent';


const hobbyPage = () => {
  return (
      <div className={hobbyStyle.hobbyMainPageContainer}>
          <span className={hobbyStyle.text}>I build  <span className={hobbyStyle.textHighlight}> modern and performant</span> websites & softwares.</span>
          
        <AnimatedContent className={hobbyStyle.imageContainer}direction="horizontal" distance={10} duration={1.5} ease="power2.out">
              <Image className={hobbyStyle.image} src={image1} alt="coding img" />
          </AnimatedContent>
          
          <div>
              <span className={hobbyStyle.textHighlightHeader}>I turn ideas into modern solutions</span>
                <p className={hobbyStyle.text2}>Clean code. Elegant design. Real impact.</p>
          </div>
          <div className={hobbyStyle.cardContainer}>
              
              <AnimatedContent className={hobbyStyle.card} direction="vertical" distance={100} duration={0.5}>
                  <div className={hobbyStyle.titleArea}><p className={hobbyStyle.icon}><FontAwesomeIcon icon={faLightbulb}/> Concept and Ideation</p></div>
                  <p className={hobbyStyle.description}>Where ideas are shaped with intention and creativity.</p>
                  <p className={hobbyStyle.description2}>Design begins with understanding.</p>
              </AnimatedContent>
              
               <AnimatedContent className={hobbyStyle.card} direction="vertical" distance={100} duration={0.5}>
                  <div className={hobbyStyle.titleArea}><p className={hobbyStyle.icon}><FontAwesomeIcon icon={faComputer}/> Execution and Development</p></div>
                  <p className={hobbyStyle.description}>Transforming ideas into functional digital experiences..</p>
                  <p className={hobbyStyle.description2}>Where ideas become reality.</p>
                </AnimatedContent>
          </div>
    </div>
  )
}

export default hobbyPage
