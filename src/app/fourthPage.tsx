"use client";
import { useState } from "react";
import fourthPageCSS from "./fourthPageCSS.module.css";
import Image from "next/image";
import Link from "next/link";

import mainImage from "./assets/project showcase/startlight-void-hand.png";
import photo1 from "./assets/project showcase/starlightvoid1.jpg";
import photo2 from "./assets/project showcase/starlightvoid2.png";
import photo3 from "./assets/project showcase/starlightvoid3.png";
import photo4 from "./assets/project showcase/starlightvoid4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faGamepad, faLink } from "@fortawesome/free-solid-svg-icons";
import Particles from "../components/Particles";
import ImageLightbox from "../components/ImageLightbox";

export default function fourthPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className={fourthPageCSS.fourthPageMainContainer}>
      {/* <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={400}
        particleSpread={30}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
      /> */}
      <div>
        <p className={fourthPageCSS.title}>Web Development meets Game Development</p>
        <p className={fourthPageCSS.subtitle}>Ideas shaped through design thinking.</p>
      </div>
      
      <div className={fourthPageCSS.firstContainer}>
        <div className={fourthPageCSS.mainImageContainer}>
          <Image className={fourthPageCSS.mainImage} src={mainImage} alt="Starlight Void"/>
        </div>
        <div className={fourthPageCSS.titleContainer}>
          <h1>Starlight Void</h1>
          <span><FontAwesomeIcon icon={faGamepad} /> Web-based Horror Game</span>
          <p>Fear, rendered through the web</p>
        </div>
      </div>

      <div className={fourthPageCSS.secondContainer}>
          <h2>“An unsettling experience, played in your browser.”</h2>
        <div className={fourthPageCSS.descriptionContainer}>
          <p>
          Step into a breached ship consumed by the Swarm. This web-based
          point-and-click horror game draws inspiration from Honkai: Star Rail’s
          Swarm Disaster arc
          </p>
          <li>web-based game</li>
          <li>point-and-click playstyle</li>
          <li>no framework just pure HTML, CSS, and vanilla Javascript</li>

         <Link className={fourthPageCSS.link} href="https://starlightvoid.netlify.app/"><span>Continue to website </span><FontAwesomeIcon className={fourthPageCSS.icon} icon={faArrowRight} /></Link>
        </div>
        <div className={fourthPageCSS.photoContainer}>
          <Image
            className={fourthPageCSS.photo1}
            src={photo1}
            alt="Starlight void"
            onClick={() => setActiveImage(photo1.src)}
          />
          <div className={fourthPageCSS.secondPhotoContainer}>
            <Image
              className={fourthPageCSS.photo2}
              src={photo2}
              alt="Starlight void"
              onClick={() => setActiveImage(photo2.src)}
            />
            <Image
              className={fourthPageCSS.photo2}
              src={photo3}
              alt="Starlight void"
              onClick={() => setActiveImage(photo3.src)}
            />
            <Image
              className={fourthPageCSS.photo2}
              src={photo4}
              alt="Starlight void"
              onClick={() => setActiveImage(photo4.src)}
            />
          </div>
        </div>
      </div>

      <ImageLightbox
        imageSrc={activeImage}
        onClose={() => setActiveImage(null)}
      />
    </div>
  );
}
