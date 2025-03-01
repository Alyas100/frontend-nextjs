import { useEffect, useState } from "react";

interface FoodItemProps {
  id: number;
  name: string;
  price: number;
}

export default function CartList() {
  const [cart, setCart] = useState<FoodItemProps[]>([]);

  useEffect(() => {
    // Fetch cart data from Express backend
    const fetchCart = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart`);
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="mt-4 bg-white p-4 shadow-md rounded">
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="border-b py-2 flex justify-between">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
