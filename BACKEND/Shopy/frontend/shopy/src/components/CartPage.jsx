import React, { useState } from "react";

const initialCart = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    quantity: 1,
    image:
      "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 89.99,
    quantity: 2,
    image:
      "https://via.placeholder.com/100",
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
