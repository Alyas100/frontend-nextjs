// The FoodItem component displays individual food items with an option to add them to the cart.

'use client';

import { useState } from 'react';

interface FoodItemProps {
  id: number;
  name: string;
  price: number;
}

export default function FoodItem({ id, name, price }: FoodItemProps) {
  const [cart, setCart] = useState<FoodItemProps[]>([]);

  const addToCart = () => {
    setCart([...cart, { id, name, price }]);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button
        onClick={addToCart}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
