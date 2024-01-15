import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { ButtonGroup, Button, Divider, Text } from "@chakra-ui/react";
import axios from "axios";
import image from "../desktopImage.jpg";
import Layout from "../components/Layout.js";
import { useCart } from "../contaxt/cart";

function Home() {
  const [cart] = useCart();
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getProduct();
  }, []);

  const AddToCart = async (key) => {
    const data = products.filter((product) => key === product._id);

    const existingValuesJson = localStorage.getItem("myCart");
    const existingValues = existingValuesJson
      ? JSON.parse(existingValuesJson)
      : [];

    // Add the new value to the existing list
    existingValues.push(data);

    // Convert the updated list to a JSON string
    const updatedValuesJson = JSON.stringify(existingValues);

    // Set the updated list in localStorage
    localStorage.setItem("myCart", updatedValuesJson);
  };

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/getProduct"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error, "Error");
    }
  };

  const searchValue = async () => {
    try {
      const data = await axios.get(`/api/v1/getProduct/${search}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout title={"ALl Products - Best offers "}>
        <div className="sencond-list">
          <h1>
            Markate<span className="divideColor">Kit</span>
          </h1>
          <form className="formdata d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => setSearch(event.target.value)}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={searchValue()}
            >
              Search
            </button>
          </form>
          <ul className="list d-flexs">
            <li className="nav-item">
              <Badge count={cart?.length} snowZero>
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </Badge>
            </li>
            <li>
              <Link className="nav-link" to="#">
                Product
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="#">
                Category
              </Link>
            </li>
          </ul>
        </div>
        <div className="product-body">
          <div className="container mt-2">
            <h1 className="product-title text-center">Product Details</h1>
            <div className="product-list">
              {products.map((product) => (
                <>
                  <div className="card" styles="" id={product.key}>
                    <img
                      className="product-image"
                      src={"http://localhost:8080/" + product.photo}
                      alt={product.name}
                      width={200}
                      height={100}
                    />
                    <div className="card-body">
                      <h6>{product.name}</h6>
                      <Text>{product.description}</Text>
                      <Text> {product.category}</Text>
                      <Text>${product.price}</Text>
                      <Divider />
                      <ButtonGroup className="btn-group" spacing="2">
                        <Button
                          className="card-btn"
                          variant="solid"
                          colorScheme="blue"
                        >
                          Buy now
                        </Button>
                        <Button
                          id="card-btn1"
                          variant="ghost"
                          colorScheme="blue"
                          onClick={(_id) => AddToCart(product._id)}
                        >
                          Add to cart
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
