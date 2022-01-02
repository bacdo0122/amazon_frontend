/* eslint-disable */
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import axios from "axios";
import MyProductItem from "../components/MyProductItem";
export default function MyProduct() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem("username")).username;
    const getProducts = await axios.get(
      `http://localhost:5000/product/myProduct/brown`
    );
    console.log(getProducts);
    setData(getProducts.data.data);
  }, [change]);

  return (
    <>
      <Navbar />
      <div className="shopping_cart">
        <div className="shopping_cart_container">
          <h2>Shopping Cart</h2>
          {data &&
            data.map((item, index) => {
              console.log(item);
              return (
                <MyProductItem
                  id={item._id}
                  brand={item.brand}
                  name={item.name}
                  color={item.color}
                  image={item.image}
                  numberVote={item.numberVote}
                  star={item.star}
                  dolar={item.dolar}
                  cent={item.cent}
                  setChange={setChange}
                  change={change}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
