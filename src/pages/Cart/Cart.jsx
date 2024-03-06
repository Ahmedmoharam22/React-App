import "./Cart.css";
import CartList from "./../../components/CartList/CartList";
import CartHeader from "./../../components/CartHeader/CartHeader";
import CartFooter from "../../components/CartFooter/CartFooter";

export default function Cart() {
  return (
    <div className="cart-cont container mt-5">
      <CartHeader />
      <CartList />
      <CartFooter  />
    </div>
  );
}
