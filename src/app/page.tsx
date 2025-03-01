// The page.tsx file in the app directory serves as the home page, listing all available food items.

import FoodItem from './components/FoodItem';

const foodItems = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Pizza', price: 8.99 },
  { id: 3, name: 'Pasta', price: 7.49 },
];


export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
