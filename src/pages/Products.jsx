// src/pages/Products.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  return (
    <div
      className="relative min-h-screen p-8 overflow-hidden
      bg-gradient-to-br from-[#f8f6ef] via-[#efe9dc] to-[#e3dcc8]
      dark:from-[#0c0c0c] dark:via-[#141414] dark:to-[#1a1a1a]
      text-[#22250C] dark:text-[#f1f1f1] font-sans transition-all duration-700"
    >
      {/* 🌿 Floating Ambient Shapes */}
      <span className="absolute top-10 left-10 w-64 h-64 bg-[#efe9dc]/40 dark:bg-[#3a4420]/30 rounded-full blur-3xl animate-float-slow"></span>
      <span className="absolute bottom-24 right-16 w-80 h-80 bg-[#f8f6ef]/40 dark:bg-[#617b42]/30 rounded-full blur-3xl animate-float-medium"></span>
      <span className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#f2efdf]/30 dark:bg-[#9cb375]/20 rounded-full blur-[150px] animate-float-fast"></span>

      {/* ✨ Header Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#b4c692]/40 to-transparent dark:via-[#617b42]/40 opacity-60"></div>

      {/* 🛋️ Title */}
      <h1
        className="text-4xl md:text-5xl font-serif font-bold text-center mb-14 tracking-wide
        bg-gradient-to-r from-[#22250C] via-[#3a4420] to-[#617b42]
        dark:from-[#b4c692] dark:via-[#9cb375] dark:to-[#e1eed4]
        bg-clip-text text-transparent drop-shadow-md"
      >
        Our Premium Furniture Collection
      </h1>

      {/* 🔄 States */}
      {status === "loading" ? (
        <p className="text-center text-lg animate-pulse">Loading products...</p>
      ) : items.length === 0 ? (
        <p className="text-center text-lg">No products found.</p>
      ) : (
        // 🪑 Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10">
          {items.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group bg-gradient-to-br from-[#fffaf1]/90 to-[#f1ecdf]/80 
              dark:from-[#121212]/70 dark:to-[#1f1f1f]/70
              backdrop-blur-xl border border-[#e4e0d4]/60 dark:border-[#2a2a2a]/60
              rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500 overflow-hidden"
            >
              {/* 🖼 Product Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-2xl mb-4">
                <img
                  src={product.image || "https://via.placeholder.com/300"}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#efe9dc]/50 dark:from-[#000]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* 🏷️ Product Info */}
              <div className="px-4 pb-5">
                <h3 className="text-lg font-bold mb-1 text-[#22250C] dark:text-[#f1f1f1]">
                  {product.title}
                </h3>
                <p className="text-[#3a4420] dark:text-[#b4c692] font-semibold mb-2">
                  ₹ {product.price}
                </p>
                <p className="text-[#444]/80 dark:text-gray-400 text-sm line-clamp-2">
                  {product.description}
                </p>
              </div>

              {/* 🛒 Hover CTA */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <button
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3a4420] to-[#617b42]
                  dark:from-[#b4c692] dark:to-[#e1eed4]
                  text-white dark:text-[#22250C] font-medium shadow-md hover:shadow-lg transition"
                >
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
