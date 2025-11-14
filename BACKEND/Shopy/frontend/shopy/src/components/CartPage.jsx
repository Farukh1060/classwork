import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, featchCart, UpdateQty} from "../features/Cart/CartSlice";


export default function CartPage() {
  
   const BASE_URL = import.meta.env.VITE_API_URL;
  const handlePayment = async () => {
    const token = localStorage.getItem("access"); // if JWT auth used
    console.log(token);
    
    // 1️⃣ Create order from backend
    const { data } = await axios.post(
      `${BASE_URL}/api/create-order/`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(data);
    
    const options = {
      key: data.key,
      amount: data.amount * 100, // Razorpay expects paise
      currency: data.currency,
      name: "My E-Commerce Store",
      description: "Purchase Transaction",
      order_id: data.order_id,
      handler: async function (response) {
        // 2️⃣ Send payment details back to backend for verification
        await axios.post(
          `${BASE_URL}/api/verify-payment/`,
          response,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Payment Successful!");
      },
      theme: { color: "#3399cc" },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  const dispatch = useDispatch()


  const {items,updateqty,loading,error } = useSelector((state)=>{return state.cart})
  // console.log(items);

  useEffect(() => {
  if (items.data && items.data.length > 0) {
    const initialQuantities = {};
    items.data.forEach((item) => {
      initialQuantities[item.id] = item.quantity || 1;
    });
    setQuantities(initialQuantities);
  }
}, [items.data]);

  useEffect(()=>{
    dispatch(featchCart())
  },[])



const [quantities, setQuantities] = useState({});
// console.log(quantities);


const increaseQuantity = (id) => {
  setQuantities(async(prev) => {
    const newQty = (prev[id] || 1) + 1;

    // send update to backend
    await dispatch(UpdateQty({ pk: id, qty: newQty }));
    dispatch(featchCart())

    return { ...prev, [id]: newQty };
    return { ...prev, [id]: newQty };
  });
};

const decreaseQuantity = (id) => {
  setQuantities(async(prev) => {
    const newQty = Math.max((prev[id] || 1) - 1, 1);

    await dispatch(UpdateQty({ pk: id, qty: newQty }));
    dispatch(featchCart())

    return { ...prev, [id]: newQty };
  });
};


  
 

  // if(loading){
  //   return <h1>loading</h1>
  // }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {items.data && items.data.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {items.data && items.data.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={`${BASE_URL}${item.product.image}`}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.product.name}</h2>
                      <p className="text-gray-500">${item.product.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex ">

                  </div>

                  <div className="flex items-center space-x-4">
                    <p className="px-2 py-1 text-gray-500">${item.quantity * item.product.price ||item.product.price.toFixed(2)}</p>
                  
                    <button
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{quantities[item.id]|| item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={async () => {
                        await dispatch(DeleteCart(item.id));
                        dispatch(featchCart()); // ✅ re-fetch cart to update totals
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ${items.total}</h2>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"  onClick={handlePayment}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
