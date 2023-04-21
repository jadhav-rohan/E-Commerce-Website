import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";

import { getProducts } from "./helper/coreapicalls";
import Pagination from "./Pagination";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(6)

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  console.log(products.length)
  useEffect(() => {
    loadAllProduct();
  }, []);
  
  var f = currentPosts;
  const items = f.length > 0 && f.map((p, i) => (
    <div className="text-center mb-2 p-2">
    <Card
      product={p}
    />
    </div>
));


  return (
    <Base title="Home Page" description="All Products">
      <div className="container">
        <div className="row row-cols-xl-3
        row-cols-lg-3
        row-cols-md-2
        row-cols-xs-1
        ">
        {/* {products.map((product, index) => {
            return (
              <div key={index} className="text-center mb-2 p-2">
                <Card product={product} />
              </div>
            );
        })} */}
        {items}
        
        {/* </Row> */}
        </div>
        </div>
        <Pagination
            totalPosts={products.length}
            postsPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
    </Base>
  );
}
