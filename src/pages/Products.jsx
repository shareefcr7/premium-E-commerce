// src/pages/Products.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 transition-colors duration-500 text-gray-900 dark:text-white">
      
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        Our Premium Furniture Collection
      </h1>

      {/* Loading State */}
      {status === "loading" ? (
        <p className="text-center text-lg">Loading products...</p>
      ) : items.length === 0 ? (
        <p className="text-center text-lg">No products found.</p>
      ) : (
        // Product Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map(product => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-4 hover:scale-105 hover:shadow-xl transform transition-all duration-500 overflow-hidden"
            >
              {/* Product Image */}
              <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-2xl mb-4">
                <img
                  src={product.image || "https://via.placeholder.com/300"} // fallback
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{product.title}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">₹ {product.price}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{product.description}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
