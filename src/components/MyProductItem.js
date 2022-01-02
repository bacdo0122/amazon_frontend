/* eslint-disable */
import React from "react";
import axios from "axios";
export default function MyProductItem({
  id,
  brand,
  name,
  color,
  image,
  numberVote,
  star,
  dolar,
  cent,
  setChange,
  change,
}) {
  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="cart-item-info">
        <div className="cart-name">{name}</div>
        <div class="carousel-star margin-5">
          <span class="carousel-star-number">
            <span
              class="star-img"
              style={{
                backgroundPosition: `${star.position}`,
              }}
            ></span>
            <span class="fas fa-angle-down" aria-hidden="true"></span>
          </span>
          <span class="carousel-link">
            <a
              class="btn-expander-label "
              href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20#customerReviews"
            >
              {numberVote}
            </a>
          </span>
        </div>
        <div className="cart-name">
          ${dolar}.{cent}
        </div>
        <div className="cart-name">In stock soon.</div>
        <div className="cart-name">Gift options not available</div>
        <div className="cart-name">Color: {color}</div>
        <div className="cart-name">Brand: {brand}</div>
        <div className="product-control">
          <button
            onClick={(e) => {
              if (
                e.currentTarget.parentElement.querySelector(".number_product")
                  .value != 0
              ) {
                e.currentTarget.parentElement.querySelector(".number_product")
                  .value--;
              }
            }}
          >
            -
          </button>

          <button
            className="delete-btn"
            style={{ marginRight: "30px" }}
            onClick={async () => {
              const deleteProduct = await axios.delete(
                `http://localhost:5000/product/${id}`
              );
              setChange(!change);
            }}
          >
            Delete
          </button>
          <a className="delete_btn" href={`/my_products/${id}`}>
            Update
          </a>
        </div>
      </div>
    </div>
  );
}
