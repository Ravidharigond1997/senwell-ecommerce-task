import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useCart } from "../contaxt/cart";
import "../cart.css";

function CartPage() {
  const [cart, setCart] = useCart();

  const navigate = useNavigate();
  const removeItem = async (key) => {
    let myCart = [...cart];
    const newCart = cart.map((data, outerID) =>
      data.findIndex((product, innerID) => product.key === key)
    );
    myCart.splice(newCart, 1);
    setCart(myCart);
    // Set the updated list in localStorage
    localStorage.setItem("myCart", JSON.stringify(myCart));
    const myItem = JSON.parse(localStorage.getItem(myCart));

    if (myItem === null) {
      navigate("/");
    }
  };
  return (
    <Layout>
      <table className="table table-success table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">PName</th>
            <th scope="col">PDescription</th>
            <th scope="col">PPrice</th>
            <th scope="col">PCategory</th>
            <th scope="col">Remove Item</th>
          </tr>
        </thead>
        {cart.map((data, id) =>
          data.map((product, innerIndex) => (
            <tbody>
              <tr key={`${id}-${innerIndex}`}>
                <th scope="row">{product.key}</th>
                <td>{product.name}</td>
                <td>{product.descrtion}</td>
                <td>{product.price}</td>
                <td>{product.Category}</td>
                <td>
                  <button onClick={(key) => removeItem(product.key)}>
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      ;
    </Layout>
  );
}

export default CartPage;
