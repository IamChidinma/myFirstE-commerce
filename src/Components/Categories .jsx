// import React, { useState, useEffect } from "react";
// import "./Categories.css";
// const Categories = ({ setCategory, setActiveIndex, activeIndex }) => {
//   const BaseURL = "https://fakeapi.net/products/categories";
//   const [categories, setCategories] = useState([]);

//   const getAllCategories = async () => {
//     try {
//       const res = await fetch(BaseURL, { method: "GET" });
//       const data = await res.json();
//       setCategories(["All", ...data]);
//       console.log(data);
//     } catch (err) {
//       console.log("Categories Api Error", err);
//     }
//   };

//   useEffect(() => {
//     getAllCategories();
//   }, []);

//   return (
//     <div className="Categories_Body">
//       <div className="Categories_wrapper">
//         {categories?.map((categorie, index) => (
//           <div
//             onClick={() => {
//               setActiveIndex(index), setCategory(categorie);
//             }}
//             className={`Categories_wrapper_Text ${
//               index === activeIndex ? "active" : ""
//             }`}
//             key={index}
//           >
//             <span>{categorie}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Categories;
import React, { useState, useEffect } from "react";
import "./Categories.css";

const Categories = ({ setCategory, setActiveIndex, activeIndex }) => {
  const BaseURL = "https://fakeapi.net/products/categories";
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const res = await fetch(BaseURL);
      const data = await res.json();
      setCategories(["All", ...data]); // add All as first category
    } catch (err) {
      console.log("Categories Api Error", err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="Categories_Body">
      <div className="Categories_wrapper">
        {categories?.map((categorie, index) => (
          <div
            onClick={() => {
              setActiveIndex(index);
              setCategory(categorie);
            }}
            className={`Categories_wrapper_Text ${
              index === activeIndex ? "active" : ""
            }`}
            key={index}
          >
            <span>{categorie}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
