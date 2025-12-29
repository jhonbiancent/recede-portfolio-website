"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Carousel.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faImages } from "@fortawesome/free-solid-svg-icons";

const slides = [
  { src: "/purrezza/purrezza2.jpg" },
  { src: "/purrezza/purrezza3.jpg" },
  { src: "/purrezza/purrezza4.jpg" },
  { src: "/purrezza/purrezza5.jpg" },
  { src: "/purrezza/purrezza6.jpg" },
  { src: "/purrezza/purrezza7.jpg" },
  { src: "/purrezza/purrezza8.jpg" },
  { src: "/purrezza/purrezza9.jpg" },
];

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  /* -------------------- DRAG LOGIC -------------------- */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  /* -------------------- AUTO SCROLL -------------------- */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.4; // auto-scroll speed

    const autoScroll = () => {
      if (!isDragging.current) {
        track.scrollLeft += speed;
      }

      // Infinite loop reset
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        ref={trackRef}
        className={styles.track}
        onMouseDown={onMouseDown}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={onMouseMove}
      >
        {/* duplicate slides for infinite loop */}
        {[...slides, ...slides].map((slide, i) => (
          <div className={styles.slide} key={i}>
            <img src={slide.src} alt={`Slide ${i}`} />
          </div>
        ))}
      </div>
        <div className={styles.madeWithContainer}>
              <span>made with | </span><span> Photoshop <FontAwesomeIcon icon={faImage} /></span><span> Canva <FontAwesomeIcon icon={faImages} /></span>
        </div>
    </div>
  );
}
