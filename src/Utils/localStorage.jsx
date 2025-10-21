export const saveCartToLocal = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export const getCartFromLocal = () => {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
};