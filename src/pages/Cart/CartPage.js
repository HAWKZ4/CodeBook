import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const { cartList } = useCart();

  const cartlist = cartList;

  useTitle(`Cart (${cartList.length})`);

  return (
    <main>
      {cartlist.length ? <CartList cartlist={cartlist} /> : <CartEmpty />}
    </main>
  );
};
