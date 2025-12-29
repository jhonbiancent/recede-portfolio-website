"use client";
import { useState } from "react";
import style from "./thirdPageCSS.module.css";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./snapCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"; 
import { faArrowLeft, faArrowRight, faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons"; 
import image1 from "./assets/project-showcase/nihon-trails-api-integration1.png";
import image2 from "./assets/project-showcase/nihon-trails-api-integration2.png";
import image3 from "./assets/project-showcase/nihon-trails-api-integration3.png";
import backgroundImage from "./assets/project-showcase/japan-background.jpg";
import AnimatedContent from "@/components/AnimatedContent";

import ImageLightbox from "../components/ImageLightbox";

const thirdPage = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <div className={style.thirdPageMainContainer} id="projects">
      <div className={style.titleContainer}>
         <p className={style.title}>Sample of my Website Projects</p>
          <p className={style.subtitle}>Web development with clarity, precision, and purpose.</p>
      </div>
      
      <AnimatedContent className={style.backgroundContainer}  distance={60} duration={1.2} ease="power2.out">
        <section><Image className={style.backgroundImage} src={backgroundImage} alt={"japan bg"} /></section>
        <div className={style.subtitleContainer}>
           <h2>Nihon Trails</h2>
          <h3>Explore Japan</h3>
          <p>Experience Japan beyond the ordinary</p>
          <Link href="https://nihon-trails.vercel.app">
              <button className={style.button}><FontAwesomeIcon icon={faArrowLeft} /> visit site</button>
          </Link>
      </div>
      </AnimatedContent>

      <div className={style.landingPageContainer}>
        <div className={style.descriptionContainer}>
          <h3 className={style.title1}><FontAwesomeIcon icon={faLocationDot}/> START YOUR JOURNEY</h3>
          <p>A web-based <span>travel planning tool</span> for tourists preparing to explore Japan. 
            <span> Highlights</span> scenic destinations, notable tourist attractions, and thoughtfully curated itineraries
            . This project integrates data and services from an existing <span>third-party website</span>
          </p>
          <Link className={style.link} href="https://nihon-trails.vercel.app"><span>Continue to website </span><FontAwesomeIcon className={style.icon} icon={faArrowRight} /></Link>
        </div>
          <div className={style.carouselContainer}>
              <Carousel />
        </div>
      </div>

      <div className={style.apiPageContainer}>

      <AnimatedContent className={style.card} direction="vertical" distance={60} duration={1.2} ease="power2.out" onClick={() => setActiveImage(image1.src)}>
          <div className={style.imageContainer}><Image className={style.image}  src={image1} alt="api integration"/></div>
          <span>Maps API Integration</span>
          <p>Allows users to visually see their target destionations and allows them to specify the area</p>
      </AnimatedContent>
        
      <AnimatedContent className={style.card} delay={0.15} direction="vertical" distance={60} duration={1.2} ease="power2.out" onClick={() => setActiveImage(image2.src)}>
          <div className={style.imageContainer}><Image className={style.image}  src={image2} alt="api integration"/></div>
          <span>Tourist Spots in Proximity</span>
          <p>Shows famous tourist spots in selected area helping users to properly set their itineraries</p>
      </AnimatedContent>
        
      <AnimatedContent className={style.card} delay={0.30} direction="vertical" distance={60} duration={1.2} ease="power2.out" onClick={() => setActiveImage(image3.src)}>
          <div className={style.imageContainer}><Image className={style.image}  src={image3} alt="api integration" /></div>
          <span>Japan Region Overview</span>
          <p>Highlights Japan's regions, giving tourists the opportunity to explore Japan virtually</p>
      </AnimatedContent>
        
      </div>
      <div className={style.createdWithContainer}>
        <span>made with</span><p> | </p><span>React<FontAwesomeIcon icon={faReact}/></span><span>Node.js<FontAwesomeIcon icon={faNodeJs}/></span>
      </div>
            <ImageLightbox
        imageSrc={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </div>
  )
}

export default thirdPage
