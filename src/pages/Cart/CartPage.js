import { useCart } from "../../context";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useTitle } from "../../hooks/useTitle";
import { RoutesAnimations } from "../../animations";

export const CartPage = () => {
  const { cartList } = useCart();

  const cartlist = cartList;

  useTitle(`Cart (${cartList.length})`);

  return (
    <RoutesAnimations>
      <main>
        {cartlist.length ? <CartList cartlist={cartlist} /> : <CartEmpty />}
      </main>
    </RoutesAnimations>
  );
};
