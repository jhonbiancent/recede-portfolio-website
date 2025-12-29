
"use client";
import React, { useState } from "react";
import Image from "next/image";

import sixthPageCSS from "./sixthPageCSS.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faGear, faImage, faImages, faLightbulb, faPalette, faStar } from "@fortawesome/free-solid-svg-icons";
import image1 from "./assets/project-showcase/photo-editing.jpg";

import Carousel from "./Carousel";

const sixthPage = () => {
const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
      <div className={sixthPageCSS.sixthPageMainContainer}>
        <h1>Multimedia & Design</h1>
      <h2>Transforming business <span>concepts</span> into visually compelling designs</h2>

      <div className={sixthPageCSS.introductionContainer}>
        <section className={sixthPageCSS.introduction}>
          <section className={sixthPageCSS.iconContainer}>
            <span><FontAwesomeIcon icon={faPalette}/> layout design</span>
          </section>
          <h2>Purrezza Product Layout & Design</h2>
          <p>I had the opportunity to create and <span>design</span> product menus for Purrezza last December 15, 2024, a business that offers refreshing drinks like lemonades and delicious food options. My goal was to craft a visually <span>appealing</span> and user-friendly menu that enhances the customer experience while <span>staying true</span> to Purrezza's brand identity.</p>
          <Link href="https://www.linkedin.com/posts/jhon-biancent-recede-4a8ba7314_graphicdesign-menudesign-branding-activity-7310243005238575104-afBH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE_pIAABs22U43VgdxQwjjxDZ65CLfqfcKg">
            <button className={sixthPageCSS.button}>see post</button>
          </Link>
        </section>
            <div><Image className={sixthPageCSS.bgImage} src={image1} alt={"photo editing"} /></div>
      </div>

      <div className={sixthPageCSS.quotesContainer}>
          <h5><FontAwesomeIcon icon={faStar}/> Clean</h5>
          <h5><FontAwesomeIcon icon={faLightbulb} /> Cohesive</h5>
          <h4>Visual enhancements crafted for modern presentation</h4>
          <h5><FontAwesomeIcon icon={faDiamond} /> Appealing</h5>
        <h5><FontAwesomeIcon icon={faGear} /> Modern</h5>
      </div>
      <Carousel />
           
    </div>
  )
}

export default sixthPage
