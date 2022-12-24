import React, { useEffect } from "react";
import Users from "../components/Users";
import axios from "axios";
import { setProducts } from "../components/redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "../components/ProductComponent";

function users() {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("error", error);
      });
    //console.log(response);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //console.log(product);
  return (
    <div className="container-fluid">
      <h1 className="bg-gray-200 text-2xl">All Users</h1>
      <div className="mx-auto p-8">
        <div className="">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default users;
