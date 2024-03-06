import { useEffect, useState } from "react";
import "./Shop.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import ShopFilters from "../../components/ShopFilters/ShopFilters";
import Pagination from "../../components/Pagination/Pagination";
import { useParams } from "react-router";
let PRDUCTS_PER_PAGE = 8;
export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filterQuery, setFilterQuery] = useState("");
  const [numOfPages, setNumOFPages] = useState(undefined);
  let { page } = useParams();
  if (!page) page = 1;

  useEffect(() => {
    async function getProductsApi() {
      const res = await fetch(
        ` http://localhost:3000/products?_page=${page}&_limit=${PRDUCTS_PER_PAGE}&${filterQuery}`
      );
      setNumOFPages(
        Math.ceil(res.headers.get("X-Total-Count") / PRDUCTS_PER_PAGE)
      );
      const data = await res.json();

      setProducts(data);
    }

    getProductsApi();
  }, [filterQuery, page]);

  return (
    <Container className="my-5">
      <ShopFilters setFilterQuery={setFilterQuery} />
      <Row>
        {products.map((product) => (
          <Col md={3} className="mb-4" key={`products-list-item-${product.id}`}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
      <Pagination currentPage={page} numOfPages={numOfPages} route={"/shop/"} />
    </Container>
  );
}
