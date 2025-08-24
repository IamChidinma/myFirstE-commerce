import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const images = [
    "https://i.ebayimg.com/images/g/7lIAAOSwy4dkW9k4/s-l500.webp",
    "https://i.ebayimg.com/images/g/SBsAAOSwUXRnEVU9/s-l500.webp",
    "https://i.ebayimg.com/images/g/Pr8AAOSw4E5n4sAC/s-l300.webp",
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0913104/1.jpg?3819",
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/1306762/1.jpg?3737",
    "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/8088904/1.jpg?5707",
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
