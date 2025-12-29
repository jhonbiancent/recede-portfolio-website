"use client";
import { useState } from "react";
import style from "./fourthPageCSS.module.css";
import Image from "next/image";
import Link from "next/link";

import mainImage from "./assets/project-showcase/startlight-void-hand.png";
import photo1 from "./assets/project-showcase/starlightvoid1.jpg";
import photo2 from "./assets/project-showcase/starlightvoid2.png";
import photo3 from "./assets/project-showcase/starlightvoid3.png";
import photo4 from "./assets/project-showcase/starlightvoid4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBiohazard, faGamepad, faHeartPulse, faLink } from "@fortawesome/free-solid-svg-icons";
import ImageLightbox from "../components/ImageLightbox";
import { faCss, faJs } from "@fortawesome/free-brands-svg-icons";

export default function fourthPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className={style.fourthPageMainContainer}>

      <div>
        <p className={style.title}>When Web Development meets Game Development</p>
        <p className={style.subtitle}>Ideas shaped through design thinking.</p>
      </div>
      
      <div className={style.firstContainer}>

        <div className={style.mainImageContainer}>
          <Image className={style.mainImage} src={mainImage} alt="Starlight Void"/>
        </div>
        <div className={style.titleContainer}>
          <div className={style.iconContainer}>
            <p>Game Development</p>
          </div>
          <h1>Starlight Void</h1>
          <span><FontAwesomeIcon icon={faGamepad} /> Web-based Horror Game</span>
          <p>Fear, rendered through the web</p>
           <Link href="https://starlightvoid.netlify.app/"><button  className={style.button}>play now </button></Link>
        </div>
      </div>

      <div className={style.secondContainer}>
        <h2>“An unsettling experience, played in your browser.”</h2>
        <h4><FontAwesomeIcon icon={faBiohazard}/> Where <span>silence</span> becomes the loudest threat</h4>
        <div className={style.descriptionContainer}>
          <h1><FontAwesomeIcon icon={faHeartPulse} /> An Unsettling Experience</h1>
          <p>
          Step into a breached ship <span>consumed</span> by the Swarm. This web-based
          point-and-click horror game draws inspiration from Honkai: Star Rail’s
          Swarm Disaster arc
          </p>
          <li>web-based <span>game</span></li>
          <li>point-and-click playstyle</li>
          <li>there is <span>no framework</span>just pure HTML, CSS, and vanilla Javascript</li>

         <Link className={style.link} href="https://starlightvoid.netlify.app/"><p>Continue to website </p><FontAwesomeIcon className={style.icon} icon={faArrowRight} /></Link>
        </div>

        <div className={style.photoContainer}>
          <Image
            className={style.photo1}
            src={photo1}
            alt="Starlight void"
            onClick={() => setActiveImage(photo1.src)}
          />
          <div className={style.secondPhotoContainer}>
            <Image
              className={style.photo2}
              src={photo2}
              alt="Starlight void"
              onClick={() => setActiveImage(photo2.src)}
            />
            <Image
              className={style.photo2}
              src={photo3}
              alt="Starlight void"
              onClick={() => setActiveImage(photo3.src)}
            />
            <Image
              className={style.photo2}
              src={photo4}
              alt="Starlight void"
              onClick={() => setActiveImage(photo4.src)}
            />
          </div>
        </div>

        <div className={style.madeWithContainer}>
          <span>made with | </span><span> Javascript <FontAwesomeIcon icon={faJs}/></span> <span> CSS <FontAwesomeIcon icon={faCss}/></span>
        </div>

      </div>

      <ImageLightbox
        imageSrc={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </div>
  );
}
