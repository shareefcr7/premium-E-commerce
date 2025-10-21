export const setUserRole = (role) => {
  localStorage.setItem("userRole", role);
};

export const getUserRole = () => {
  return localStorage.getItem("userRole") || "guest";
};

export const clearUserRole = () => {
  localStorage.removeItem("userRole");
};