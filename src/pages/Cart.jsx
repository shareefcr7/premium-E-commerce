import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden
      bg-gradient-to-br from-[#f8f6ef] via-[#efe9dc] to-[#e3dcc8]
      dark:from-[#0c0c0c] dark:via-[#141414] dark:to-[#1a1a1a]
      text-[#22250C] dark:text-[#f1f1f1] font-sans py-16 transition-colors duration-700"
    >
      {/* ✨ Floating Background Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute top-10 left-10 w-48 h-48 bg-[#efe9dc]/50 dark:bg-[#3a4420]/40 rounded-full blur-3xl animate-float-slow"></span>
        <span className="absolute bottom-20 right-16 w-64 h-64 bg-[#f8f6ef]/40 dark:bg-[#617b42]/30 rounded-full blur-3xl animate-float-medium"></span>
        <span className="absolute top-1/3 left-1/2 w-80 h-80 bg-[#f2efdf]/30 dark:bg-[#9cb375]/20 rounded-full blur-2xl animate-float-fast"></span>
      </div>

      {/* 🛒 Title */}
      <h2
        className="relative text-4xl font-extrabold mb-10 text-center z-10 
        bg-gradient-to-r from-[#22250C] via-[#3a4420] to-[#617b42] 
        dark:from-[#b4c692] dark:via-[#9cb375] dark:to-[#e1eed4] 
        bg-clip-text text-transparent drop-shadow-md"
      >
        Your Shopping Cart
      </h2>

      {/* 🛍 Cart Content */}
      {items.length === 0 ? (
        <p className="relative text-center mt-32 text-lg text-[#444]/80 dark:text-gray-300 z-10">
          Your cart is empty!{" "}
          <Link
            to="/products"
            className="underline text-[#3a4420] dark:text-[#b4c692] hover:text-[#617b42] dark:hover:text-[#e1eed4] transition"
          >
            Shop now
          </Link>
        </p>
      ) : (
        <div className="relative z-10 space-y-6 max-w-5xl mx-auto px-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center 
              bg-gradient-to-br from-[#fffaf1]/90 to-[#f1ecdf]/70 
              dark:from-[#121212]/70 dark:to-[#1f1f1f]/70 
              border border-[#e4e0d4]/60 dark:border-[#2a2a2a]/60 
              backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-xl 
              transform hover:-translate-y-1 hover:scale-[1.02] 
              transition-all duration-300"
            >
              {/* 🖼 Product Info */}
              <div className="flex items-center gap-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-xl 
                  bg-[#f8f6ef] dark:bg-[#141414] p-2"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-[#3a3a3a]/80 dark:text-gray-300 font-medium">
                    ₹ {item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* ➕ Quantity Controls */}
              <div className="flex items-center gap-3 mt-4 md:mt-0">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="px-3 py-1 rounded-lg bg-[#efe9dc] dark:bg-[#2a2a2a] 
                  hover:bg-[#e3dcc8] dark:hover:bg-[#3a3a3a] transition"
                >
                  -
                </button>
                <span className="px-3 py-1 bg-[#f8f6ef] dark:bg-[#1e1e1e] rounded-lg">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="px-3 py-1 rounded-lg bg-[#efe9dc] dark:bg-[#2a2a2a] 
                  hover:bg-[#e3dcc8] dark:hover:bg-[#3a3a3a] transition"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 py-1 bg-gradient-to-r from-[#22250C] to-[#617b42] 
                  dark:from-[#9cb375] dark:to-[#b4c692] 
                  text-white dark:text-[#22250C] rounded-lg 
                  hover:opacity-90 transition font-medium"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* 💰 Total + Clear + Checkout */}
          <div
            className="mt-10 flex flex-col md:flex-row justify-between items-center 
            bg-gradient-to-br from-[#fffaf1]/85 to-[#f1ecdf]/70 
            dark:from-[#121212]/70 dark:to-[#1f1f1f]/70 
            border border-[#e4e0d4]/60 dark:border-[#2a2a2a]/60 
            backdrop-blur-md rounded-2xl p-6 shadow-md transform 
            hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
          >
            <p className="text-2xl font-bold">
              Total:{" "}
              <span
                className="bg-gradient-to-r from-[#22250C] via-[#3a4420] to-[#617b42] 
                dark:from-[#b4c692] dark:via-[#9cb375] dark:to-[#e1eed4] 
                bg-clip-text text-transparent"
              >
                ₹ {totalPrice.toFixed(2)}
              </span>
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                onClick={() => dispatch(clearCart())}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3a4420] to-[#617b42] 
                dark:from-[#b4c692] dark:to-[#e1eed4] 
                text-white dark:text-[#22250C] hover:opacity-90 transition font-medium"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#22250C] to-[#3a4420] 
                dark:from-[#9cb375] dark:to-[#cfdab5] 
                text-white dark:text-[#22250C] shadow-md hover:shadow-xl 
                transition font-semibold"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
