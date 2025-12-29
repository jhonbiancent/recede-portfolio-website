
"use client";
import React, { useState } from "react";

import sixthPageCSS from "./sixthPageCSS.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCircleUser, faHeart, faLink, faPaperPlane, faShare } from "@fortawesome/free-solid-svg-icons";

import ImageLightbox from "../components/ImageLightbox";

import Carousel from "./Carousel";

const sixthPage = () => {
const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
      <div className={sixthPageCSS.sixthPageMainContainer}>
        <h1>Multimedia & Design</h1>
      <h2>Transforming business <span>concepts</span> into visually compelling designs</h2>
      <div className={sixthPageCSS.introductionContainer}>
            <p>I had the opportunity to create and design product menus for Purrezza last December 15, 2024, a business that offers refreshing drinks like lemonades and delicious food options. My goal was to craft a visually appealing and user-friendly menu that enhances the customer experience while staying true to Purrezza's brand identity.</p>
      </div>
          {/* <div className={sixthPageCSS.leftContainer}>
              <h2>Purrezza Product Design</h2>
              <div className={sixthPageCSS.card}>
                  <div className={sixthPageCSS.reactionsContainer}>
                      <FontAwesomeIcon icon={faCircleUser} />
                      <div className={sixthPageCSS.userInputContainer}></div>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <FontAwesomeIcon icon={faHeart}/>
                      <FontAwesomeIcon icon={faShare}/>
                  </div>
            <p>I had the opportunity to create and design product menus for Purrezza last December 15, 2024, a business that offers refreshing drinks like lemonades and delicious food options. My goal was to craft a visually appealing and user-friendly menu that enhances the customer experience while staying true to Purrezza's brand identity.</p>
                  <div className={sixthPageCSS.hashtagsContainer}>
                      <h3><FontAwesomeIcon icon={faCheckSquare} /> Refreshing</h3>
                      <h3><FontAwesomeIcon icon={faCheckSquare} /> Readable</h3>
                      <h3><FontAwesomeIcon icon={faCheckSquare}/> Appealing</h3>
                      <h3><FontAwesomeIcon icon={faCheckSquare}/> Aesthetic</h3>
                  </div>
                  <div className={sixthPageCSS.linkContainer}>
                      <p><FontAwesomeIcon icon={faLink} /> Link:{" "} <Link className={sixthPageCSS.link} href="https://www.linkedin.com/posts/jhon-biancent-recede-4a8ba7314_graphicdesign-menudesign-branding-activity-7310243005238575104-afBH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_pIAABs22U43VgdxQwjjxDZ65CLfqfcKg">
                         Purrezza-Product-Design</Link></p>
                  </div>
              </div>
        
        </div>
          <div className={sixthPageCSS.rightContainer}>
              
              <Image className={sixthPageCSS.image1} src={image1} alt="Purrezza photo" onClick={() => setActiveImage(image1.src)}/>
              <div className={sixthPageCSS.imageContainer}>
              <Image className={sixthPageCSS.image2} src={image2} alt="Purrezza photo" onClick={() => setActiveImage(image2.src)}/>
              <Image className={sixthPageCSS.image2} src={image3} alt="Purrezza photo" onClick={() => setActiveImage(image3.src)}/>
              <Image className={sixthPageCSS.image2} src={image4} alt="Purrezza photo" onClick={() => setActiveImage(image4.src)}/>
            </div>
      </div> */}

      <Carousel/>
     
                   <ImageLightbox
                        imageSrc={activeImage}
                        onClose={() => setActiveImage(null)}
                      />
    </div>
  )
}

export default sixthPage
