"use client";
import { useState } from "react";
import thirdPageCSS from "./thirdPageCSS.module.css";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./snapCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink, faLocationDot } from "@fortawesome/free-solid-svg-icons"; 
import image1 from "./assets/project showcase/nihon-trails-api-integration1.png";
import image2 from "./assets/project showcase/nihon-trails-api-integration2.png";
import image3 from "./assets/project showcase/nihon-trails-api-integration3.png";

import ImageLightbox from "../components/ImageLightbox";

const thirdPage = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <div className={thirdPageCSS.thirdPageMainContainer}>
      <div className={thirdPageCSS.titleContainer}>
         <p className={thirdPageCSS.title}>Sample of my Website Projects</p>
          <p className={thirdPageCSS.subtitle}>Web development with clarity, precision, and purpose.</p>
      </div>
        <h2>Nihon Trails</h2>
      <div className={thirdPageCSS.landingPageContainer}>
        <div className={thirdPageCSS.descriptionContainer}>
          <p className={thirdPageCSS.title1}><FontAwesomeIcon icon={faLocationDot}/> Explore Japan</p>
          <li>A web-based travel planning tool for tourists preparing to explore Japan</li>
          <li>Highlights scenic destinations, notable tourist attractions, and thoughtfully curated itineraries</li>
          <li>This project integrates data and services from an existing third-party website</li>
          <Link className={thirdPageCSS.link} href="https://nihon-trails.vercel.app"><span>Continue to website </span><FontAwesomeIcon className={thirdPageCSS.icon} icon={faArrowRight} /></Link>
        </div>
          <div className={thirdPageCSS.carouselContainer}>
              <Carousel />
        </div>
      </div>
      <div className={thirdPageCSS.apiPageContainer}>
        <div className={thirdPageCSS.card}>
          <div className={thirdPageCSS.imageContainer} onClick={() => setActiveImage(image1.src)}><Image className={thirdPageCSS.image}  src={image1} alt="api integration"/></div>
          <span>Maps API Integration</span>
          <p>Allows users to visually see their target destionations and allows them to specify the area</p>
        </div>
          <div className={thirdPageCSS.card}>
           <div className={thirdPageCSS.imageContainer} onClick={() => setActiveImage(image2.src)}><Image className={thirdPageCSS.image}  src={image2} alt="api integration"/></div>
          <span>Tourist Spots in Proximity</span>
          <p>Shows famous tourist spots in selected area helping users to properly set their itineraries</p>
        </div>
        <div className={thirdPageCSS.card}>
           <div className={thirdPageCSS.imageContainer} onClick={() => setActiveImage(image3.src)}><Image className={thirdPageCSS.image}  src={image3} alt="api integration" /></div>
          <span>Japan Region Overview</span>
          <p>Highlights Japan's regions, giving tourists the opportunity to explore Japan virtually</p>
        </div>
      </div>
            <ImageLightbox
        imageSrc={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </div>
  )
}

export default thirdPage
