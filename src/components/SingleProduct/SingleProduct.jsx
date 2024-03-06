import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function SingleProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState({});

  async function getProductsApi() {
    const res = await fetch("http://localhost:3000/products/"+id);
    const data = await res.json();

    setProduct(data);
  }

  useEffect(() => {
    getProductsApi();
  }, []);

  console.log(product)

  return (
    <div>

    </div>
  )
}
