import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-950 text-white font-sans py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h2>

      {items.length === 0 ? (
        <p className="text-center text-blue-100 mt-32 text-lg">
          Your cart is empty!{' '}
          <Link to="/products" className="text-blue-300 underline hover:text-blue-400">
            Shop now
          </Link>
        </p>
      ) : (
        <div className="space-y-6 max-w-full mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center bg-blue-950 rounded-xl p-4 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image + Name + Price */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-blue-300 font-bold">₹ {item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="flex items-center gap-3 mt-3 md:mt-0">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="px-3 py-1 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
                >
                  -
                </button>
                <span className="px-3 py-1 bg-blue-800 rounded-lg">{item.quantity}</span>
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="px-3 py-1 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total + Clear Cart + Checkout */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center bg-blue-800 rounded-xl p-6 shadow-md border border-blue-950 transform hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300">
            <p className="text-2xl font-bold">
              Total: <span className="text-blue-300">₹ {totalPrice.toFixed(2)}</span>
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                onClick={() => dispatch(clearCart())}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
              >
                Clear Cart
              </button>
              <Link
                to="/checkout"
                className="px-4 py-2 bg-blue-950 hover:bg-blue-900 rounded-lg transition"
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
