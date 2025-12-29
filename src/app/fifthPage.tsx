"use client";

import React, { useState, useRef, useEffect } from "react";
import fifthPageCSS from "./fifthPageCSS.module.css";
import Image from "next/image";

import photo1 from "./assets/project-showcase/digitwin.png";
import photo2 from "./assets/project-showcase/digitwin2.png";
import photo3 from "./assets/project-showcase/digitwin3.png";

import icon1 from "./assets/icons/icon-visualization.png";
import icon2 from "./assets/icons/icon-analysis.png";
import icon3 from "./assets/icons/icon-monitoring.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import ImageLightbox from "../components/ImageLightbox";
import { faUnity } from "@fortawesome/free-brands-svg-icons";




const FifthPage = () => {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
        if (!contentRef.current) return;
        setHeight(contentRef.current.scrollHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={fifthPageCSS.fifthPageMainContainer}>
      
      <div className={fifthPageCSS.titleContainer}>
        <h1>DESKTOP APPLICATIONS</h1>
        <p>Interactive applications developed with Unity</p>
      </div>

      <div className={fifthPageCSS.videoContainer}>
          <video autoPlay muted loop >
            <source src="/videos/digitwin.mp4" type="video/mp4" />
          </video>
      </div>

      <div className={fifthPageCSS.photoContainer}
        style={{
          overflow: "hidden",
          maxHeight: open ? height : 0,
          transition: "max-height 200ms ease 50ms",
          width: "100%"
        }}
      >
        <div ref={contentRef} className={fifthPageCSS.photoContainerPadding}> 
            <Image
              className={fifthPageCSS.photo}
              src={photo1}
              alt="Digital Twin"
              onClick={() => setActiveImage(photo1.src)}
            />
            <Image
              className={fifthPageCSS.photo}
              src={photo2}
              alt="Digital Twin"
            onClick={() => setActiveImage(photo2.src)}
            />
            <Image
              className={fifthPageCSS.photo}
              src={photo3}
              alt="Digital Twin"
               onClick={() => setActiveImage(photo3.src)}
            />
        </div>
      </div>
        <button
          className={fifthPageCSS.collapseButton}
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? (
            <>
              Show less <FontAwesomeIcon icon={faChevronUp} />
            </>
          ) : (
            <>
              Show more <FontAwesomeIcon icon={faChevronDown} />
            </>
          )}
      </button>
      <div className={fifthPageCSS.descriptionContainer}>
        <h1>Zarraga Digital Twin & Flood Simulation</h1>
        <p>Zarraga Digital Twin & Flood Simulation is a <span>Unity-based</span> flood modeling and <br />
          visualization designed to <span>simulate flooding</span> using real terrain elevation data.</p>
        
        <div className={fifthPageCSS.cardContainer}>
          <div className={fifthPageCSS.card}>
            <Image className={fifthPageCSS.icon} src={icon1} alt={"visualization icon"} />
            <h3>3D VISUALIZATION</h3>
            <li>combines 2D flood behaviour & 3D visualization</li>
            <li>water behavior realistically follows real-world terrain contours</li>
          </div>

          <div className={fifthPageCSS.card}>
            <Image className={fifthPageCSS.icon} src={icon2} alt={"anaylis icon"} />
            <h3>PREDICTIVE ANALYSIS</h3>
            <li>creates predictive flood analysis</li>
            <li>heavy calculations with controlled execution</li>
        </div>
        
          <div className={fifthPageCSS.card}>
            <Image className={fifthPageCSS.icon} src={icon3} alt={"monitoring icon"} />
            <h3>NEAR-REALTIME MONITORING</h3>
            <li>monitors and forecasts flood</li>
            <li>displays absolute water surface elevation</li>
          </div>

        </div>
        <div className={fifthPageCSS.madeWithContainer}>
          <span>made with | </span> <span> Unity <FontAwesomeIcon icon={faUnity}/></span> <span> C# <FontAwesomeIcon icon={faLaptopCode}/> </span>
        </div>
      
      </div>
         <ImageLightbox
              imageSrc={activeImage}
              onClose={() => setActiveImage(null)}
            />
    </div>
  );
};

export default FifthPage;
