import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { API } from "../backend";
import { addItemToCart, removeItemFromCart } from "./helper/carthelper";
// import ImageHelper from "./helper/ImageHelper";
import Button from 'react-bootstrap/Button';
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
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageurl} />
    <Card.Body>
      <Card.Title className="text-dark">$ {cartPrice}</Card.Title>
      <Card.Text className="text-dark">
        {cartDescription}
      </Card.Text>
      <div className="row">
        <div className="col-12">{showAddToCart(addToCart)}</div>
        <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
      </div>
    </Card.Body>
  </Card>
  );
};

export default ProductCard;
