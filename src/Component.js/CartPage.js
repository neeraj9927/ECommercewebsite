import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItemQuanitiy,
  getCartData,
  incrementItemQuanitiy,
  removeItem,
} from "../feater";

const CartPage = () => {
  const { cart, totalQuitity, totalPrice } = useSelector(
    (state) => state.allCartData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [cart]);

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart items</h5>
                </div>
                <div className="card-body">
                  {cart.map((data) => (
                    <div className="row" key={data.id}>
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.img}
                            className="img-fluid"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div className="mask"></div>
                          </a>
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.title}</strong>
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeItem(data.id))}                          
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mb-2"
                          data-mdb-toggle="tooltip"
                          title="Move to the wish list"
                        >
                          <i className="fas fa-heart"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-4">
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              dispatch(decrementItemQuanitiy(data.id))
                            }
                            disabled={data.quantity === 1}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              value={data.quantity}
                              type="number"
                              className="form-control text-center"
                              readOnly
                            />
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            disabled={data.quantity === 10}
                            onClick={() =>
                              dispatch(incrementItemQuanitiy(data.id))
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>{data.price}</strong>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      <span></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Quinditiy</strong>
                      </div>
                      <span>
                        <strong>{totalQuitity}</strong>
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total Amount</strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
