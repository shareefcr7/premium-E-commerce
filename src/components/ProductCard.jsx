import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
      
      {/* Product Image with Hover Zoom */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {product.description}
        </p>
        <p className="text-primary font-bold text-lg mb-4">₹ {product.price}</p>

        {/* Gradient Button */}
        <button className="mt-auto bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-blue-800 hover:to-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
