import { useSelector } from "react-redux";

export default function Navbar() {
  const count = useSelector((state) => state.cart.totalCount);
  return (
    <nav className="flex justify-between bg-blue-900 text-white p-4">
      <h1 className="font-bold text-xl">LuxeFurn</h1>
      <div>
        🛒 <span className="font-semibold">{count}</span>
      </div>
    </nav>
  );
}
