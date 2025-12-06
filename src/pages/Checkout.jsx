import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Checkout() {
  const items = useSelector((state) => state.cart.items);

  // 🧮 Price Calculations
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = subtotal > 8000 ? subtotal * 0.1 : 0;
  const shipping = subtotal > 5000 ? 0 : 199;
  const tax = (subtotal - discount) * 0.05;
  const total = subtotal - discount + tax + shipping;

  // 🧾 Form & Payment
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };
  const closeModal = () => setShowConfirm(false);

  return (
    <div className="relative min-h-screen w-full py-12 px-6 flex flex-col items-center overflow-hidden bg-gradient-to-br from-[#f8f6f0] via-[#f1efe6] to-[#e7e3d8] dark:from-[#0a0a0a] dark:via-[#131313] dark:to-[#1a1a1a] text-[#22250C] dark:text-[#f5f5f5] transition-all duration-700">
      {/* 🌿 Floating Background Glow */}
      <span className="absolute top-20 left-16 w-72 h-72 bg-[#e7e3d8]/40 dark:bg-[#303020]/30 rounded-full blur-3xl animate-float-slow"></span>
      <span className="absolute bottom-32 right-20 w-96 h-96 bg-[#d6d2c0]/30 dark:bg-[#3a3a2a]/30 rounded-full blur-3xl animate-float-medium"></span>

      {/* 🛍️ Header */}
      <h1 className="relative text-4xl md:text-5xl font-serif font-bold text-center mb-10 tracking-wide bg-gradient-to-r from-[#22250C] via-[#4b5b2b] to-[#617b42] dark:from-[#b4c692] dark:via-[#9cb375] dark:to-[#6a8f37] bg-clip-text text-transparent drop-shadow-lg">
        LuxeFurn Checkout
      </h1>

      {/* 📦 Checkout Content */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white/80 dark:bg-[#121212]/80 backdrop-blur-2xl border border-[#d5d9cc]/50 dark:border-[#2a2a2a]/60 rounded-3xl shadow-2xl p-8 space-y-8 z-10"
      >
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8">
          {["Cart", "Shipping", "Payment"].map((step, i) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-semibold shadow-md ${
                  i === 0
                    ? "bg-[#617b42]"
                    : i === 1
                    ? "bg-[#9cb375]"
                    : "bg-[#c4d59e]"
                }`}
              >
                {i + 1}
              </div>
              {i < 2 && (
                <div className="w-14 h-1 bg-gradient-to-r from-[#617b42] to-[#c4d59e] mx-2 rounded-full"></div>
              )}
              <span className="text-sm text-[#4b5b2b]/80 dark:text-[#b4c692]/80 font-medium">
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Shipping Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {["name", "address", "city", "phone"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-[#3a4420]/80 dark:text-[#d5d9cc]/80 mb-1 capitalize"
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
                  className="w-full p-3 border border-[#d5d9cc]/70 dark:border-[#2a2a2a]/70 rounded-lg bg-white/70 dark:bg-[#1a1a1a]/70 text-[#22250C] dark:text-[#f2f2f2] focus:ring-2 focus:ring-[#9cb375] transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-3">
            {["UPI", "Credit/Debit Card", "Cash on Delivery"].map((method) => (
              <label
                key={method}
                className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all ${
                  paymentMethod === method
                    ? "border-[#9cb375] bg-[#f5f9f0]/80 dark:bg-[#1f2216]/70"
                    : "border-[#d5d9cc]/50 dark:border-[#2a2a2a]/60"
                }`}
              >
                <span className="font-medium text-[#22250C]/90 dark:text-[#f2f2f2]/90">
                  {method}
                </span>
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                  className="accent-[#9cb375] w-5 h-5"
                />
              </label>
            ))}
          </div>
        </div>

        {/* 🧾 Order Summary Inline */}
        <div className="bg-[#faf9f5]/70 dark:bg-[#181818]/70 rounded-2xl border border-[#d5d9cc]/50 dark:border-[#2a2a2a]/60 shadow-md p-6 space-y-3">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b border-[#d5d9cc]/40 dark:border-[#2a2a2a]/40">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium text-sm md:text-base">{item.title}</h4>
                  <p className="text-xs md:text-sm text-[#4b5b2b]/70 dark:text-[#b4c692]/70">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>
              <p className="font-semibold text-sm md:text-base">
                ₹ {(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="pt-4 space-y-2 text-sm md:text-base">
            <div className="flex justify-between"><span>Subtotal</span><span>₹ {subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>- ₹ {discount.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `₹ ${shipping}`}</span></div>
            <div className="flex justify-between"><span>GST (5%)</span><span>₹ {tax.toFixed(2)}</span></div>
            <hr className="my-3 border-[#d5d9cc]/50 dark:border-[#2a2a2a]/60" />
            <div className="flex justify-between font-bold text-base md:text-lg">
              <span>Total</span><span>₹ {total.toFixed(2)}</span>
            </div>
            <p className="text-xs md:text-sm text-[#4b5b2b]/70 dark:text-[#b4c692]/70">
              📦 Estimated Delivery: <b>{deliveryDate}</b>
            </p>
          </div>
        </div>

        {/* ✅ Confirm Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#22250C] via-[#4b5b2b] to-[#617b42] dark:from-[#6a8f37] dark:via-[#9cb375] dark:to-[#b4c692] text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          Confirm & Place Order 💳
        </button>
      </form>

      {/* 🎉 Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white/90 dark:bg-[#121212]/90 rounded-3xl p-8 max-w-md text-center shadow-2xl border border-[#d5d9cc]/60 dark:border-[#2a2a2a]/60 animate-fadeIn">
            <h2 className="text-2xl font-bold text-[#617b42] mb-3">✅ Order Confirmed!</h2>
            <p className="text-[#3a4420] dark:text-[#d5d9cc] mb-4">
              Thank you, {form.name || "Customer"}! Your order will arrive by <b>{deliveryDate}</b>.
            </p>
            <p className="text-sm text-[#4b5b2b]/70 dark:text-[#b4c692]/70 mb-5">
              Payment Method: <b>{paymentMethod}</b>
            </p>
            <button
              onClick={closeModal}
              className="mt-3 bg-gradient-to-r from-[#22250C] via-[#4b5b2b] to-[#617b42] dark:from-[#6a8f37] dark:to-[#9cb375] text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-all"
            >
              Continue Shopping 🛍️
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
