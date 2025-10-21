import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);

  // Prices
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = subtotal > 8000 ? subtotal * 0.1 : 0;
  const shipping = subtotal > 5000 ? 0 : 199;
  const tax = (subtotal - discount) * 0.05;
  const total = subtotal - discount + tax + shipping;

  // Form & payment
  const [form, setForm] = useState({ name: "", address: "", city: "", phone: "" });
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    const today = new Date();
    today.setDate(today.getDate() + Math.floor(Math.random() * 3) + 3);
    setDeliveryDate(today.toDateString());
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setShowConfirm(true); };
  const closeModal = () => setShowConfirm(false);

  return (
    <div className="relative max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-10">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>

      {/* Shipping & Payment Form */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-2 backdrop-blur-md bg-white/70 dark:bg-gray-800/80 p-8 rounded-2xl shadow-2xl space-y-5 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Checkout Process</h2>

        {/* Step Progress */}
        <div className="flex items-center justify-between mt-4 mb-8">
          {["Cart", "Shipping", "Payment"].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                  index === 0 ? "bg-green-600" : index === 1 ? "bg-blue-600" : "bg-yellow-500"
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-2 rounded-full"></div>}
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{step}</span>
            </div>
          ))}
        </div>

        {/* Shipping Info */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">Shipping Details</h3>
        {["name", "address", "city", "phone"].map((field) => (
          <div key={field}>
            <label
              htmlFor={field}
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 capitalize"
            >
              {field}
            </label>
            <input
              id={field}
              name={field}
              placeholder={`Enter your ${field}`}
              value={form[field]}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white/80 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        ))}

        {/* Payment Method */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mt-6">Select Payment Method</h3>
        <div className="space-y-3 mt-3">
          {["UPI", "Credit/Debit Card", "Cash on Delivery"].map((method) => (
            <label
              key={method}
              className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                paymentMethod === method
                  ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/30"
                  : "border-gray-300 dark:border-gray-700"
              }`}
            >
              <span className="font-medium text-gray-800 dark:text-gray-200">{method}</span>
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
                className="accent-yellow-500 w-5 h-5"
              />
            </label>
          ))}
        </div>

        <button
          type="submit"
          className="w-full mt-5 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Confirm & Place Order 💳
        </button>
      </form>

      {/* Order Summary */}
      <div className="backdrop-blur-md bg-white/80 dark:bg-gray-900/80 p-6 rounded-2xl shadow-2xl h-fit border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <span>🧾</span> Order Summary
        </h2>

        <div className="divide-y divide-gray-300 dark:divide-gray-700">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-3">
              <div className="flex items-center gap-3">
                <img
                  src={item.image} // ✅ updated property
                  alt={item.title}  // ✅ updated property
                  className="w-16 h-16 object-cover rounded-md border border-gray-300 dark:border-gray-700"
                />
                <div>
                  <h3 className="text-gray-900 dark:text-gray-200 font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">
                ₹ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-gray-400 dark:border-gray-600 pt-4 space-y-3 text-gray-800 dark:text-gray-200">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- ₹ {discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? <span className="text-green-600 font-medium">Free</span> : `₹ ${shipping}`}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (5%)</span>
            <span>₹ {tax.toFixed(2)}</span>
          </div>

          <hr className="my-3 border-gray-400 dark:border-gray-600" />

          <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
            <span>Total</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>

          <div className="mt-3 text-sm text-gray-700 dark:text-gray-400">
            <strong>📦 Estimated Delivery:</strong> {deliveryDate}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md text-center shadow-2xl animate-fadeIn">
            <h2 className="text-2xl font-bold text-green-600 mb-2">✅ Order Confirmed!</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Thank you, {form.name || "Customer"}! Your order will be delivered by <b>{deliveryDate}</b>.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Payment Method: <b>{paymentMethod}</b></p>

            <button
              onClick={closeModal}
              className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition"
            >
              Continue Shopping 🛍️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}