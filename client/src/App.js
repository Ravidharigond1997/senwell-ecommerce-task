import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Policy from "./Page/Policy";
import CartPage from "./Page/CartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}>
          Policy
        </Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
