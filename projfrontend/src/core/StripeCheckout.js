import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/carthelper";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderhelper";

const StripeCheckout = ({
  products,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [data, setData] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    let amount = 0;
    products && products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };
  const makePayment = (token) => {
    //
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        const { status } = response;
        console.log("STATUS", status);

        cartEmpty();
      })
      .catch((error) => console.log(error));
  };
  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey="pk_test_51JZE46SEHfduW7Q6giP1dQgMdvNaaPUisOxGv9caLltJAO5ZjsmZOKUE49VMkQERO4IljR7tenlQoau5U9JAHwNR007dPWClJE"
        token={makePayment}
        amount={getFinalPrice() * 100}
        name="Buy T-Shirts"
        shippingAddress
        billingAddress
      >
        <button className="btn btn-success">Pay with Stripe</button>
      </StripeCheckoutButton>
    ) : (
      <Link to="/signin">
        <button className="btn btn-warning">SignIn</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className="text-white">Checkout<br/> <br/><span>Total: {getFinalPrice()}</span></h3>
      <br/>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
