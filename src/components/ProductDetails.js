import React from "react";
import "../css/ProductDetails.css";
import { useDispatch } from "react-redux";
import { Add } from "../redux/action";
export default function ProductDetails({
  image,
  name,
  star,
  numberVote,
  color,
  brand,
  dolar,
  cent,
}) {
  const dispatch = useDispatch();

  return (
    <div className="container_product">
      <div className="product_image">
        <img src={image} alt={name} />
      </div>
      <div className="product_info">
        <div className="product_name">{name}</div>
        <span className="carousel-link">
          <a
            className="btn-expander-label"
            href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;asc_contenttype=article&amp;ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;creativeASIN=B0049C2S32&amp;cv_ct_cx=amazonbasics&amp;cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;cv_ct_pg=search&amp;cv_ct_we=asin&amp;cv_ct_wn=osp-single-source-pecos-desktop&amp;dchild=1&amp;keywords=amazonbasics&amp;linkCode=oas&amp;pd_rd_i=B0049C2S32&amp;pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&amp;pd_rd_w=V2ENe&amp;pd_rd_wg=YAmHS&amp;pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&amp;pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&amp;qid=1632419715&amp;sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&amp;tag=bhgosp-20#customerReviews"
          >
            Brand: {brand}
          </a>
        </span>
        <div className="carousel-star margin-5 border">
          <span className="carousel-star-number">
            <span
              className="star-img"
              style={{ backgroundPosition: `${star.position}` }}
            ></span>
            <span className="fas fa-angle-down" aria-hidden="true"></span>
          </span>
          <span className="carousel-link">
            <a
              className="btn-expander-label "
              href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;asc_contenttype=article&amp;ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;creativeASIN=B0049C2S32&amp;cv_ct_cx=amazonbasics&amp;cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;cv_ct_pg=search&amp;cv_ct_we=asin&amp;cv_ct_wn=osp-single-source-pecos-desktop&amp;dchild=1&amp;keywords=amazonbasics&amp;linkCode=oas&amp;pd_rd_i=B0049C2S32&amp;pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&amp;pd_rd_w=V2ENe&amp;pd_rd_wg=YAmHS&amp;pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&amp;pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&amp;qid=1632419715&amp;sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&amp;tag=bhgosp-20#customerReviews"
            >
              {numberVote}
            </a>
          </span>
        </div>
        <table className="product_table border">
          <tr>
            <td className="product_property">Color</td>
            <td>{color}</td>
          </tr>
          <tr>
            <td className="product_property">Brand</td>
            <td>{brand}</td>
          </tr>
          <tr>
            <td className="product_property">Available</td>
            <td>true</td>
          </tr>
          <tr>
            <td className="product_property">Seller</td>
            <td>Nomar Hand</td>
          </tr>
        </table>
        <div className="about">
          <h3>About this item</h3>
          <ul className="about_list">
            <li className="about_item">
              [Multiple Use and Heat Safe] - Can be used as a cutting board to
              cut fruits & vegetables, use it to dry off your dishes, or simply
              use it for any cooking prep work you need. Heat safe: perfect to
              use as a non-slip trivet for hot pans or baking sheets straight
              out of the oven, lay it flat on any kitchen countertop to protect
              against damage from hot items
            </li>
            <li className="about_item">
              [Foldable Design] - Roll it up quickly and easily to put away and
              make your kitchen look less cluttered. Really useful for saving
              counter space, easy to clean and adjustable, you can fold it up to
              different sizes.
            </li>
            <li className="about_item">
              [Strong and sturdy] - Durable construction will not bend or warp
              even when used with heavy cookware; easily supports up to 70lb
              with all rod used.
            </li>
          </ul>
        </div>
      </div>
      <div className="add">
        <h3>If you want to buy it</h3>
        <button
          onClick={() => {
            const cart = JSON.parse(localStorage.getItem("cart"));
            let newCart = { ...cart };
            const check = newCart.products.filter(
              (item, index) => item.name === name
            );
            if (check.length == 0) {
              newCart.products.push({
                number: 1,
                image,
                name,
                star,
                numberVote,
                color,
                brand,
                dolar,
                cent,
              });
            } else {
              const index = newCart.products.findIndex(
                (item, index) => item.name === name
              );
              newCart.products[index].number++;
            }

            newCart.total += 1;
            localStorage.setItem("cart", JSON.stringify(newCart));
            dispatch(Add(newCart));
          }}
        >
          Add to List Cart
        </button>
      </div>
    </div>
  );
}
