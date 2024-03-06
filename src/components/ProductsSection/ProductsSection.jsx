import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./ProductsSection.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsSection(props) {
  return (
    <div className="mb-5">
      <h3 className="m-0">{props.title}</h3>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        className="my-3"
      >
        {props.products.map(product => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}
