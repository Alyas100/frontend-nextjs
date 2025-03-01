import CartList from "./components/CartList";

export default function CartPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <CartList />  
    </div>
  );
}
