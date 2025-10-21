// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(state => state.products.items.find(p => p.id === parseInt(id)));

  if (!product) return <p className="text-center mt-20 text-gray-400">Product not found</p>;

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, title: product.title, price: product.price, image: product.image }));
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 flex justify-center">
      <div className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-fadeIn">
        <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform animate-float-slow"/>
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-indigo-500">{product.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{product.description}</p>
          <p className="text-2xl font-bold text-indigo-600 mt-4">₹ {product.price}</p>
          <div className="flex gap-4 mt-6">
            <button onClick={handleAddToCart} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition">
              Add to Cart
            </button>
            <button onClick={handleBuyNow} className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-xl transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
