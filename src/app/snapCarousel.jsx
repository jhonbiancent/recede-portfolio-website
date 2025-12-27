"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./thirdPageCSS.module.css";

const slides = [
  { type: "video", src: "/videos/nihon vid1.mp4" },
  { type: "video", src: "/videos/nihon vid2.mp4" },
  { type: "video", src: "/videos/nihon vid3.mp4" },
  { type: "video", src: "/videos/nihon vid4.mp4" },
];


export default function SnapCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const videoRefs = useRef([]);

  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); 

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      video.pause();
      video.currentTime = 0;

      if (i === index) {
        video.play().catch(() => {});
      }
    });
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className={styles.carousel}>
      <div
        ref={trackRef}
        className={styles.track}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className={styles.slide} key={i}>
            {slide.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[i] = el)}
                muted
                playsInline
                preload="metadata"
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img src={slide.src} alt="" />
            )}
          </div>
        ))}
      </div>
      <button className={styles.prev} onClick={prev}>‹</button>
      <button className={styles.next} onClick={next}>›</button>
    </div>
  );
}
