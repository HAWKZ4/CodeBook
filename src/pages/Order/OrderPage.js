import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { RoutesAnimations } from "../../animations/RoutesAnimations";

export const OrderPage = () => {
  const { state } = useLocation();

  useTitle("Order Summary");

  return (
    <RoutesAnimations>
      <main>
        {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
      </main>
    </RoutesAnimations>
  );
};
