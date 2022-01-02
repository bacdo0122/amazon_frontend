/* eslint-disable */
import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../css/Cart.css";
import { Add, Total } from "../redux/action";
import { checkedAllCheckBox } from "./ButtonControl";
import { useSelector, useDispatch } from "react-redux";

export default function Cart({ check, setCheck }) {
  const getProducts = useSelector((state) => state.product).products;
  const total = useSelector((state) => state.total).sum;
  const numberProduct = useSelector((state) => state.total).number;
  const [selected, setSelected] = useState(false);
  const [checkCB, setCheckCB] = useState(false);
  const [checkExistCB, setCheckExistCB] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Add(JSON.parse(localStorage.getItem("cart"))));
  }, []);

  useEffect(() => {
    const cb = document.querySelectorAll(".select");
    const checked = Array.from(cb).filter((item) => item.checked === true);
    if (checked.length > 0) {
      setCheckExistCB(true);
    } else setCheckExistCB(false);

    if (checked.length === cb.length && cb.length !== 0) {
      setCheckCB(true);
    } else {
      setCheckCB(false);
    }
  }, [selected]);

  const handleCB = (cb) => {
    const checked = Array.from(cb).filter((item) => item.checked === true);
    if (checked.length > 0) {
      setCheckCB(true);
      setCheckExistCB(true);
      checkedAllCheckBox(dispatch, Total, true);
    } else {
      setCheckCB(false);
      setCheckExistCB(false);
      checkedAllCheckBox(dispatch, Total, false);
    }
  };

  const handleCheckedCheckBox = () => {
    const cb = document.getElementsByClassName("select");
    for (var checkbox of cb) {
      if (checkCB) checkbox.checked = false;
      else checkbox.checked = true;
    }
    handleCB(cb);
  };

  return (
    <div className="shopping_cart">
      <div className="shopping_cart_container">
        <h2>Shopping Cart</h2>
        <div className="select-option carousel-link">
          {!checkExistCB && "No items selected ."}
          {checkCB ? (
            <a onClick={handleCheckedCheckBox}>Deselect all items</a>
          ) : (
            <a onClick={handleCheckedCheckBox}>Select all items</a>
          )}
        </div>
        {getProducts &&
          getProducts.map((item, index) => {
            return (
              <CartItem
                {...item}
                key={index}
                setCheck={setCheck}
                setSelected={setSelected}
                selected={selected}
                numberProduct={numberProduct}
                totals={total}
              />
            );
          })}
        {checkExistCB ? (
          <div className="total">
            Subtotal({numberProduct} items) :
            <span className="total-price">{total} $</span>
          </div>
        ) : (
          <div className="total">No items selected</div>
        )}
      </div>
    </div>
  );
}
