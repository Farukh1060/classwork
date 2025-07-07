import React from "react";

const RazorpayPayment = () => {
  const handlePayment = async () => {
    const res = await fetch("http://localhost:5000/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 500 }), // ₹500
    });

    const data = await res.json();
    const options = {
      key: "rzp_test_hb96I5bWTDSL2g", // Get public key from .env
      amount: data.amount,
      currency: "INR",
      order_id: data.id,
      handler: (response) => {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return <button onClick={handlePayment}>Pay ₹500</button>;
};

export default RazorpayPayment;
