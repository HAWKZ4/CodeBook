import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashbaordEmpty";
import { useEffect, useState } from "react";
import { useTitle } from "../../hooks/useTitle";
import { getOrders } from "../../services";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
          closeOnClick: true,
        });
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {orders &&
          orders.map((order) => <DashboardCard order={order} key={order.id} />)}
      </section>

      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};
