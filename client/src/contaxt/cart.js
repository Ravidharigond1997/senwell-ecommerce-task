import { useState, useContext, createContext, useEffect } from "react";

const cartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let existingCartItem = localStorage.getItem("myCart");
    console.log(existingCartItem, "setCart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      {" "}
      {children}
    </cartContext.Provider>
  );
};

//custome hook
const useCart = () => useContext(cartContext);

export { useCart, CartProvider };
