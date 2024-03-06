import { Container } from "react-bootstrap";
import "./Home.css";
import Carousel from "../../components/Carousel/Carousel";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProductsApi() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();

    setProducts(data);
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  return (
    <Container>
      <Carousel />
      <ProductsSection
        title="Latest Products"
        products={products.slice(0, 10)}
      />
      <ProductsSection title="Offers" products={products.slice(10, 20)} />
    </Container>
  );
}
