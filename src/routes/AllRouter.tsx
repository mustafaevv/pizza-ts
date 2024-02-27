import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Header from "../layout/Header";

const AllRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:type" element={<Category />} />
      </Routes>
    </>
  );
};
export default AllRouter;
