import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { API } from "../backend";
import { addItemToCart, removeItemFromCart } from "./helper/carthelper";
// import ImageHelper from "./helper/ImageHelper";
import {
	Image,
	Card,
	Row,
	Col,
	ListGroup,
} from 'react-bootstrap';

const ProductCard = ({
  product,
  addToCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo of T-Shirt";
  const cartDescription = product
    ? product.description
    : "A default description";
  const cartPrice = product ? product.price : "Default";

  const addtoCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addToCart) => {
    return (
      addToCart && (
        <button
          onClick={addtoCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

  return (
    // <div className="card text-white this border ">
    //   <div className="card-header lead">Product</div>
    //   <div className="card-body">
    //     {getARedirect(redirect)}
    //     {/* <img> */}
    //     <ImageHelper product={product} />
    //     {/* </img> */}
    //     <p className="lead bg-success font-weight-normal text-wrap">
    //       {cartDescription}
    //     </p>
    //     <p className="btn btn-success rounded  btn-sm px-4">${cartPrice}</p>
    //     <div className="row">
    //       <div className="col-12">{showAddToCart(addToCart)}</div>
    //       <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
    //     </div>
    //   </div>
    // </div>
    <Col class="card col-8">
      <img src={imageurl} class="card-img-top img-fluid" alt="product"/>
      <div class="card-body text-dark bg-light">
        <h5 class="card-title">${cartPrice}</h5>
        <p class="card-text">{cartDescription}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addToCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
         </div>
      </div>
    </Col>
  );
};

export default ProductCard;
