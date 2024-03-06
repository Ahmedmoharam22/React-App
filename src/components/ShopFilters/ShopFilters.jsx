import { useEffect, useState } from "react";
import "./ShopFilters.css";

export default function ShopFilters({ setFilterQuery }) {
  const [categories, setCategories] = useState([]);
  const [filterValues, setFilterValues] = useState({
    q: "",
    category: "",
    price_gte: "",
    price_lte: "",
  });

  //http://localhost:3004/categories
  useEffect(() => {
    async function getCategories() {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
      setCategories(data);
    }

    getCategories();
  }, []);

  function changeInputValue(e) {
    setFilterValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const arr = [];
    for (let key in filterValues) {
      if (filterValues[key]) {
        arr.push(`${key}=${filterValues[key]}`);
      }
    }
    setFilterQuery(arr.join("&"));
  }

  return (
    <form className="mb-3 d-flex gap-3" onSubmit={handleSubmit}>
      <input
        className="shop-filter__input w-100"
        type="text"
        name="q"
        placeholder="Search..."
        value={filterValues.q}
        onChange={changeInputValue}
      />
      <select
        className="shop-filter__input w-100"
        value={filterValues.category}
        name="category"
        onChange={changeInputValue}
      >
        <option value="">Choose a category</option>
        {categories.map((category) => {
          return (
            <option key={`shop-filter-category-${category}`}>{category}</option>
          );
        })}
      </select>
      <input
        className="shop-filter__input w-100"
        type="number"
        name="price_gte"
        placeholder="Min price"
        value={filterValues.price_gte}
        onChange={changeInputValue}
      />
      <input
        className="shop-filter__input w-100"
        type="number"
        name="price_lte"
        placeholder="Max price"
        value={filterValues.price_lte}
        onChange={changeInputValue}
      />
      <input className="shop-filter__input btn btn-primary" type="submit" />
      <input
        className="shop-filter__input btn btn-primary"
        type="reset"
        onClick={() => {
          setFilterValues({
            q: "",
            category: "",
            price_gte: "",
            price_lte: "",
          })
          setFilterQuery("");
        }}
      />
    </form>
  );
}

// {
//   q: "Iphone",
//   category: "smartphones",
//   price_gte: "400",
//   price_lte: "700",
// }
// const obj = {
//   q: "Iphone",
//   category: "smartphones",
//   price_gte: "400",
//   price_lte: "700",
// }
// const arr = [];
// for(let key in obj){
//   arr.push(`${key}=${obj[key]}`);
// }

// console.log(arr)
// console.log(arr.join('&'))

// const arr = ['q=Iphone', 'category=smartphones', 'price_gte=400', 'price_lte=700'];

// http://localhost:3004/products?q=Iphone&category=smartphones&price_gte=400&price_lte=700
