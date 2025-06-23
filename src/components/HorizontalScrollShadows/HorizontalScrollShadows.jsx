import React, { useEffect, useRef, useState } from "react";
import "./HorizontalScrollShadows.css";

export default function HorizontalScrollShadows({ children, className = "" }) {
  const scrollboxRef = useRef(null);
  const [atLeft, setAtLeft] = useState(true);
  const [atRight, setAtRight] = useState(false);

  useEffect(() => {
    function updateShadows() {
      const el = scrollboxRef.current;
      if (!el) return;
      setAtLeft(el.scrollLeft <= 0);
      setAtRight(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    }
    const el = scrollboxRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateShadows);
    updateShadows();
    return () => el.removeEventListener("scroll", updateShadows);
  }, []);

  return (
    <div className="scrollbox-wrapper">
      <div className={`scrollable-container ${className}`} ref={scrollboxRef}>
        {children}
      </div>
      <div className={`shadow shadow-left${atLeft ? " hide" : ""}`} />
      <div className={`shadow shadow-right${atRight ? " hide" : ""}`} />
    </div>
  );
}
