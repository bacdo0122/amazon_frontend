/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Add, Total } from "../redux/action";
import {
  additionButton,
  subtractionButton,
  additionInput,
  deleteButton,
} from "./ButtonControl";
export default function CartItem({
  brand,
  number,
  name,
  color,
  image,
  numberVote,
  star,
  dolar,
  cent,
  setCheck,
  setSelected,
  selected,
  numberProduct,
  totals,
}) {
  const dispatch = useDispatch();
  const [getnumber, setGetNumber] = useState(number);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setGetNumber(number);
  }, [number]);
  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 700);
  }, [loading]);

  return (
    <div className="cart-item">
      <div className="cart_item_cb">
        <input
          type="checkbox"
          name="select"
          className="select"
          onChange={(e) => {
            const checkBox = e.target;
            console.log(getnumber);
            if (checkBox.checked == true) {
              const total =
                parseFloat(totals) + getnumber * (dolar + cent / 100);

              // localStorage.setItem("total", total.toFixed(2));
              dispatch(
                Total({
                  sum: total.toFixed(2),
                  number: (numberProduct += getnumber),
                })
              );
            } else {
              const total =
                parseFloat(totals) - getnumber * (dolar + cent / 100);

              // localStorage.setItem("total", total.toFixed(2));
              dispatch(
                Total({
                  sum: total.toFixed(2),
                  number: (numberProduct -= getnumber),
                })
              );
            }
            setSelected(!selected);
          }}
        />
      </div>
      <img src={image} alt={name} />
      <div className="cart-item-info">
        <div className="cart-name cart_name_product">{name}</div>
        <div className="carousel-star margin-5">
          <span className="carousel-star-number">
            <span
              className="star-img"
              style={{
                backgroundPosition: `${star.position}`,
              }}
            ></span>
            <span className="fas fa-angle-down" aria-hidden="true"></span>
          </span>
          <span className="carousel-link">
            <a
              className="btn-expander-label "
              href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20#customerReviews"
            >
              {numberVote}
            </a>
          </span>
        </div>
        <div className="cart-name cart-price">
          ${dolar}.{cent}
        </div>
        <div className="cart-name">In stock soon.</div>
        <div className="cart-name">Gift options not available</div>
        <div className="cart-name">Color: {color}</div>
        <div className="cart-name">Brand: {brand}</div>
        <div className="product-control">
          {loading ? (
            <button className="Delete-btn  loading-active" disabled>
              -
            </button>
          ) : (
            <button
              className="Delete-btn"
              onClick={(e) =>
                subtractionButton(
                  e,
                  setGetNumber,
                  name,
                  dispatch,
                  Add,
                  Total,
                  setLoading,
                  setCheck,
                  dolar,
                  cent,
                  numberProduct,
                  totals
                )
              }
            >
              -
            </button>
          )}
          {loading ? (
            <input
              type="text"
              value={getnumber}
              className="number_product loading-active"
              disabled
            />
          ) : (
            <input
              type="text"
              value={getnumber}
              className="number_product"
              onChange={(e) => {
                const reg = /^\d*\.?\d*$/;

                if (reg.test(e.target.value)) {
                  setGetNumber(e.target.value);
                }
              }}
              onBlur={(e) => {
                additionInput(
                  e,
                  name,
                  dispatch,
                  Add,
                  Total,
                  setLoading,
                  e.target.value,
                  dolar,
                  cent,
                  numberProduct,
                  totals
                );
              }}
            />
          )}
          {loading ? (
            <button className="Delete-btn  loading-active" disabled>
              +
            </button>
          ) : (
            <button
              className="Delete-btn"
              onClick={(e) =>
                additionButton(
                  e,
                  setGetNumber,
                  name,
                  dispatch,
                  Add,
                  Total,
                  setLoading,
                  dolar,
                  cent,
                  numberProduct,
                  totals
                )
              }
            >
              +
            </button>
          )}
          <span> | </span>
          <button
            className="delete-btn"
            onClick={() => {
              deleteButton(
                name,
                dispatch,
                Add,
                Total,
                getnumber,
                dolar,
                cent,
                setSelected,
                selected,
                numberProduct,
                totals
              );
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
