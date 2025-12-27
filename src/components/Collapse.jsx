"use client";
import React, { useRef, useEffect, useState } from "react";

const Collapse = ({
  isOpen,
  direction = "down",
  duration = 300,
  delay = 0,
  className = "",
  children
}) => {
  const contentRef = useRef(null);
  const [size, setSize] = useState(0);

  const isVertical = direction === "down" || direction === "up";

  useEffect(() => {
    if (!contentRef.current) return;

    const updateSize = () => {
      setSize(
        isVertical
          ? contentRef.current.scrollHeight
          : contentRef.current.scrollWidth
      );
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, [isVertical]);

  const style = {
    overflow: "hidden",
    transition: `${isVertical ? "max-height" : "max-width"} ${duration}ms ease ${delay}ms`,
    maxHeight: isOpen && isVertical ? size : 0,
    maxWidth: isOpen && !isVertical ? size : 0
  };

  return (
    <div className={className} style={style}>
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
