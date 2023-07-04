import { useEffect, useState } from "react";
import { ProductCard } from "../../../components/Elements/ProductCard";
import { getFeaturedProducts } from "../../../services";
import { toast } from "react-toastify";
import { Position } from "../../../animations";
import useWindowScrollPosition from "@rehooks/window-scroll-position";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const { y } = useWindowScrollPosition({ throttle: 500 });

  useEffect(() => {
    if (y > 100) {
      setIsActive(true);
    }
  }, [y]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch (error) {
        toast.error(error.message, {
          position: "bottom-center",
          closeOnClick: true,
        });
      }
    }
    fetchProducts();
  }, []);

  return (
    <Position isActive={isActive} offsetY={55}>
      <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
          Featured eBooks
        </h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isActive={isActive}
            />
          ))}
        </div>
      </section>
    </Position>
  );
};
