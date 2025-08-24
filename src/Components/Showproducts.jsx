// import React, { useState, useEffect } from "react";
// import "./ShowProducts.css";

// const Showproducts = () => {
//   const [products, setProducts] = useState([]); // holds "all" view
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [filteredProducts, setFilteredProducts] = useState([]); // shows current view
//   const [loading, setLoading] = useState(true);
//   const [viewMode, setViewMode] = useState("grid");
//   const [num, setNumber] = useState(5);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(
//           "https://fakestoreapi.in/api/products/category"
//         );
//         const data = await res.json();
//         if (data.status === "SUCCESS") setCategories(data.categories);
//       } catch (e) {
//         console.error("Error fetching categories:", e);
//       }
//     };
//     fetchCategories();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         if (!selectedCategory || selectedCategory === "all") {

//           const res = await fetch(
//             `https://fakestoreapi.in/api/products?limit=${num}`
//           );
//           const data = await res.json();
//           if (data.status === "SUCCESS") {
//             setProducts(data.products);
//             setFilteredProducts(data.products);
//           }
//         } else {

//           const res = await fetch(
//             `https://fakestoreapi.in/api/products/category?type=${encodeURIComponent(
//               selectedCategory
//             )}`
//           );
//           const data = await res.json();
//           if (data.status === "SUCCESS") {

//             setFilteredProducts(data.products || []);
//           }
//         }
//       } catch (e) {
//         console.error("Error fetching products:", e);
//         setFilteredProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [num, selectedCategory]);

//   const handleCategoryClick = (category) => {
//     if (category === "all") {
//       setSelectedCategory("all");
//       setNumber(150);
//     } else {
//       setSelectedCategory(category);
//     }
//   };

//   const formatPrice = (price) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(price);

//   const ProductCard = ({ product }) => (
//     <div className="product-card">
//       <div className="product-image-container">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="product-image"
//         />
//         {product.discount && (
//           <div className="product-badge badge-discount">
//             -{product.discount}%
//           </div>
//         )}
//         {product.onSale && (
//           <div className="product-badge badge-sale">On Sale</div>
//         )}
//       </div>
//       <div className="product-content">
//         <h3 className="product-title">{product.title}</h3>
//         <p className="product-description">{product.description}</p>
//         <div className="product-meta">
//           <span className="product-brand">{product.brand ?? "—"}</span>
//           <span className="product-category">{product.category}</span>
//         </div>
//         <div className="product-footer">
//           <span className="product-price">{formatPrice(product.price)}</span>
//           <button className="product-btn">View Details</button>
//         </div>
//       </div>
//     </div>
//   );

//   const ProductListItem = ({ product }) => (
//     <div className="product-list-item">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="product-list-image"
//       />
//       <div className="product-list-content">
//         <h3 className="product-list-title">{product.title}</h3>
//         <p className="product-list-description">{product.description}</p>
//         <div className="product-list-footer">
//           <span className="product-price">{formatPrice(product.price)}</span>
//           <div className="product-list-actions">
//             <span className="product-list-brand">{product.brand ?? "—"}</span>
//             <button className="product-list-btn">View</button>
//           </div>
//         </div>
//       </div>
//       {product.discount && (
//         <div className="product-list-discount">
//           <div className="product-badge badge-discount">
//             -{product.discount}%
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-content">
//           <div className="loading-spinner"></div>
//           <p>Loading amazing products...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="app-container">
//       <header className="header">
//         <div className="container">
//           <div className="header-content">
//             <div className="header-logo">
//               <h1 className="header-title">StoreHub</h1>
//             </div>
//             <div className="view-controls">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
//               />
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`view-btn ${viewMode === "list" ? "active" : ""}`}
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container">
//         <div className="main-content">
//           <div className="category-section">
//             <div className="category-header">
//               <h2 className="category-title">Filter by Category</h2>
//             </div>

//             <div className="category-buttons">
//               <button
//                 onClick={() => handleCategoryClick("all")}
//                 className={`category-btn ${
//                   selectedCategory === "all" ? "active" : ""
//                 }`}
//               >
//                 Show All ({products.length})
//               </button>

//               {categories.map((category) => {
//                 const count =
//                   selectedCategory === "all"
//                     ? products.filter(
//                         (p) =>
//                           p.category &&
//                           p.category.toLowerCase() === category.toLowerCase()
//                       ).length
//                     :
//                       filteredProducts.filter(
//                         (p) =>
//                           p.category &&
//                           p.category.toLowerCase() === category.toLowerCase()
//                       ).length;

//                 return (
//                   <button
//                     key={category}
//                     onClick={() => handleCategoryClick(category)}
//                     className={`category-btn ${
//                       selectedCategory === category ? "active" : ""
//                     }`}
//                   >
//                     {category} ({count})
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="results-summary">
//             <p className="results-text">
//               Showing {filteredProducts.length} product
//               {filteredProducts.length !== 1 ? "s" : ""}
//               {selectedCategory !== "all" && (
//                 <span className="category-highlight">
//                   {" "}
//                   in {selectedCategory}
//                 </span>
//               )}
//             </p>
//           </div>

//           {filteredProducts.length === 0 ? (
//             <div className="empty-state">
//               <div className="empty-icon">📦</div>
//               <p className="empty-text">No products found in this category.</p>
//             </div>
//           ) : (
//             <div
//               className={
//                 viewMode === "grid" ? "products-grid" : "products-list"
//               }
//             >
//               {filteredProducts.map((product) => (
//                 <div key={product.id} className="fade-in">
//                   {viewMode === "grid" ? (
//                     <ProductCard product={product} />
//                   ) : (
//                     <ProductListItem product={product} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <footer className="footer">
//         <div className="container">
//           <div className="footer-content">
//             <p className="footer-text">
//               Built with React & Fake Store API • Created for learning purposes
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Showproducts;

import React, { useEffect, useState } from "react";
import "./ShowProducts.css";

import Categories from "./Categories ";

const ShowProduct = () => {
  const getProductUrl = "https://fakeapi.net/products";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All"); // default category
  const [activeIndex, setActiveIndex] = useState(0);

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const res = await fetch(getProductUrl, { method: "GET" });
      const data = await res.json();
      setProducts(data.data);
      console.log("All products:", data.data);
    } catch (err) {
      console.log("All products error:", err);
    }
  };

  // Fetch products by category
  const getProductCategory = async () => {
    try {
      const res = await fetch(
        `https://fakeapi.net/products/category/${category}`,
        { method: "GET" }
      );
      const data = await res.json();
      setProducts(data.data);
      console.log("Category products:", data.data);
    } catch (err) {
      console.log("Category fetch error:", err);
    }
  };

  // Decide what to fetch
  useEffect(() => {
    if (activeIndex === 0 || category === "All") {
      getAllProducts();
    } else {
      getProductCategory();
    }
  }, [category, activeIndex]);

  return (
    <div>
      {/* Category Buttons */}
      <Categories
        setCategory={setCategory}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      {/* Product Display */}
      <div className="card_wrapper">
        {products.map((item) => (
          <div key={item.id} className="product_card">
            <img src={item.image} alt={item.title} className="product_img" />
            <h3 className="product_title">{item.title}</h3>
            <p className="product_price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProduct;
