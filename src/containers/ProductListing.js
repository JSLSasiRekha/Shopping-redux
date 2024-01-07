import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing= () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
      dispatch(setProducts(response.data));
    console.log("res",response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container" style={{marginTop:'1em'}}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
