import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const images = [
    "https://roarbeautystore.com/wp-content/uploads/2025/02/Adventure-Blend-Pro-Concealers.jpg.jpg.webp",
    "https://roarbeautystore.com/wp-content/uploads/2025/08/Voan-Beauties-10-in-1-Fluffy-Mink-Lash-Set-Mix-01.jpg.webp",
    "https://roarbeautystore.com/wp-content/uploads/2023/08/Adventure-Brow-Eyeliner-Gel.jpg.webp",
    "https://roarbeautystore.com/wp-content/uploads/2024/03/Adventure-Luscious-18-in-1-Creamy-Lip-Culture-Palette.jpg.webp",
    "https://roarbeautystore.com/wp-content/uploads/2024/02/Angel-Rose-10-Colour-Lipstick-Palette-Variants.jpg.webp",
    "https://roarbeautystore.com/wp-content/uploads/2023/08/adventure-glasting-lip-gloss-1024x1024.jpg.webp",
  ];

  const [myTimer, setMyTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyTimer((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="Hero_body">
      <div className="Hero_left"></div>
      <div className="Hero_right">
        <article className="product_container">
          <img src={images[myTimer]} alt="makeup" className="img_con" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
