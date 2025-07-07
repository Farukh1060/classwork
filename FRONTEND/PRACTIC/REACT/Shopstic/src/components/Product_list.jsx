import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import x from "../assets/imges/shirt.png";
import Rating from "./rating";
import { useEffect, useState } from "react";

const Product_list = () => {

  
  const { product_data ,selectedbycatag } = useSelector((state) => {
    return state.products;
  });
  
  // console.log(product_data);
  // console.log(selectedbycatag);
  

  const [filterproduct,setfilterproduct] = useState([])
 
  useEffect(()=>{
    if(selectedbycatag ==="home"){     
      setfilterproduct(product_data)      
    }else{
      setfilterproduct(product_data.filter(ele=>ele.category ===selectedbycatag))
    }
  },[selectedbycatag])
  

//  console.log(product_data);
// console.log(filterproduct);
// console.log(selectedbycatag);



  return (
    <>
      {(selectedbycatag=="home" ? product_data : filterproduct ).map((product) => {
        return (
            <Link to={"/products_detail"} state={product.id}>
                <div
                    key={product.id}
                    className=" text-slate-600 product_card border-2 w-[250px] rounded-3xl"
        
                >
                    <div className="product_card_img ">
                    <div className="img">
                        <img src={product.images} className="w-[250px] " alt="" />
                    </div>
                    </div>
                    <div className="product_card_text p-4 flex flex-col gap-1">
                    <div className="catagory text-2xl text">
                        <p>{product.category}</p>
                    </div>
                    <div className="product_title">
                        <p>{product.title}</p>
                    </div>
                    <div className="rating flex text-2xl text-orange-500 gap-2">
                        <Rating product={Math.round(product.rating)}></Rating>

                        <p className="text-slate-500 text-lg">{product.review}</p>
                    </div>
                    <div className="brand"> by {product.brand}</div>
                    <div className="price text-teal-500 text-2xl">
                        Rs {product.price}
                        <span className=" mx-3 text-slate-600 text-xl">
                        {product.discountPercentage} % off
                        </span>
                    </div>
                    </div>
                </div>
            </Link>
        );
      })}
    </>
  );
};
export default Product_list;
