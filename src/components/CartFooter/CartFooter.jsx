function CartFooter() {
  return (
    <div className=" price-cont gap-2 d-flex flex-column align-items-end fw-bolder  text-center ">
      <div className="w-25">
        <div className="d-flex justify-content-between align-items-center text-start">
          <div>
            <div>Total</div>
            <div>
              <span className="items-num">2</span>Items
            </div>
          </div>
          <div className="total-price">$1450</div>
        </div>
        <button className="btn btn-primary w-100">Checkout</button>
      </div>
    </div>
  );
}

export default CartFooter;
