// import React from "react";
// import "./DropDown.css";
// const DropDown = () => {
//   return (
//     <div className="container">
//       <h1 className="products"> Shop for products</h1>
//       <h3>
//         Ready to glam it up? Dive into dazzling shades and bold looks that let
//         your true colors shine
//       </h3>
//       <article className="products_container">
//         <div className="product_circle">
//           <div className="box">
//             <div className="circle"></div>
//             <p>lipstick</p>
//           </div>
//         </div>
//       </article>
//     </div>
//   );
// };

// export default DropDown;
import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <div className="container">
      <h1 className="products">Shop for Products</h1>
      <h3>
        Ready to glam it up? Dive into dazzling shades and bold looks that let
        your true colors shine.
      </h3>

      <article className="products_container">
        <div className="product_circle">
          <div className="box">
            <div className="circle">
              <img
                src="https://roarbeautystore.com/wp-content/uploads/2024/08/Adventure-HD-Translucent-Setting-Powder-Light-Banana-Vanilla-Ebony.jpg.webp"
                className="Makeup_img"
                alt=""
              />
            </div>
            <p>Face</p>
          </div>
        </div>

        <div className="product_circle">
          <div className="box">
            <div className="circle">
              <img
                className="Makeup_img"
                src="https://roarbeautystore.com/wp-content/uploads/2025/08/Voan-Beauties-10-in-1-Fluffy-Mink-Lash-Set-Mix-01.jpg.webp"
                alt=""
              />
            </div>
            <p>Eyes</p>
          </div>
        </div>

        <div className="product_circle">
          <div className="box">
            <div className="circle">
              <img
                src="https://roarbeautystore.com/wp-content/uploads/2023/08/adventure-glasting-lip-gloss.jpg.webp"
                alt=""
                className="Makeup_img"
              />
            </div>
            <p>Lips</p>
          </div>
        </div>

        <div className="product_circle">
          <div className="box">
            <div className="circle">
              <img
                src="https://roarbeautystore.com/wp-content/uploads/2024/10/21-Piece-Luxury-Brush-Set.jpg.webp"
                alt=""
                className="Makeup_img"
              />
            </div>
            <p>Tools</p>
          </div>
        </div>

        {/* <div className="product_circle">
          <div className="box">
            <div className="circle"></div>
            <p>Skincare</p>
          </div>
        </div>

        <div className="product_circle">
          <div className="box">
            <div className="circle"></div>
            <p>Fragrance</p>
          </div>
        </div> */}
      </article>
    </div>
  );
};

export default DropDown;
