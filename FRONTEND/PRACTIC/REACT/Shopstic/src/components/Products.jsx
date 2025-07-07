import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { showproduct } from "../features/Product/Productslice";
import { useNavigate } from "react-router-dom";
import Rating from "./rating";
import Product_list from "./Product_list";
import Products_detail from "./Products_detail";

const Products = () => {
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showproduct());
  }, [Products_detail]);

  
  return (
    <>
      <div className="products_container mt-3">
        <div className="container">
          <p className="text-[24px] mt-7 mb-5"> popular products</p>
          <div className="products gap-3 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
            <Product_list></Product_list>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
