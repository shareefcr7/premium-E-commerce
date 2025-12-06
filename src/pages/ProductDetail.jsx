// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id))
  );

  if (!product)
    return (
      <p className="text-center mt-20 text-gray-500 dark:text-gray-400">
        Product not found.
      </p>
    );

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <div
      className="relative min-h-screen flex justify-center items-center p-8 overflow-hidden
      bg-gradient-to-br from-[#f8f6ef] via-[#efe9dc] to-[#e3dcc8]
      dark:from-[#0b0b0b] dark:via-[#121212] dark:to-[#1a1a1a]
      text-[#22250C] dark:text-[#f5f5f5] transition-all duration-700"
    >
      {/* ✨ Floating Ambient Shapes */}
      <span className="absolute top-10 left-10 w-64 h-64 bg-[#efe9dc]/40 dark:bg-[#3a4420]/30 rounded-full blur-3xl animate-float-slow"></span>
      <span className="absolute bottom-20 right-16 w-80 h-80 bg-[#f8f6ef]/40 dark:bg-[#617b42]/30 rounded-full blur-3xl animate-float-medium"></span>
      <span className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#f2efdf]/30 dark:bg-[#9cb375]/20 rounded-full blur-[150px] animate-float-fast"></span>

      {/* 🪑 Product Card */}
      <div
        className="relative z-10 flex flex-col md:flex-row gap-10 
        bg-gradient-to-br from-[#fffaf1]/90 to-[#f1ecdf]/80 
        dark:from-[#121212]/70 dark:to-[#1f1f1f]/70
        backdrop-blur-xl border border-[#e4e0d4]/60 dark:border-[#2a2a2a]/60
        rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 max-w-6xl w-full"
      >
        {/* 🖼 Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-[90%] h-[420px] object-contain rounded-2xl bg-[#f8f6ef]/60 dark:bg-[#1a1a1a]/60 shadow-lg hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        {/* 🏷️ Product Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 
            bg-gradient-to-r from-[#22250C] via-[#3a4420] to-[#617b42]
            dark:from-[#b4c692] dark:via-[#9cb375] dark:to-[#e1eed4]
            bg-clip-text text-transparent"
          >
            {product.title}
          </h2>

          <p className="text-[#444]/90 dark:text-gray-400 leading-relaxed mb-6">
            {product.description}
          </p>

          <p
            className="text-2xl font-semibold mb-8 
            bg-gradient-to-r from-[#3a4420] to-[#617b42]
            dark:from-[#b4c692] dark:to-[#e1eed4]
            bg-clip-text text-transparent"
          >
            ₹ {product.price}
          </p>

          {/* 🛒 Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg 
              bg-gradient-to-r from-[#3a4420] to-[#617b42]
              dark:from-[#b4c692] dark:to-[#e1eed4]
              text-white dark:text-[#22250C] transition-all duration-300 hover:scale-[1.02]"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="flex-1 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg
              bg-gradient-to-r from-[#22250C] to-[#3a4420]
              dark:from-[#dce7c8] dark:to-[#b4c692]
              text-white dark:text-[#22250C] transition-all duration-300 hover:scale-[1.02]"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
