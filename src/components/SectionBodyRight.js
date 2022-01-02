/* eslint-disable */
import React, { useEffect, useState } from "react";
import { api } from "../api";
import Slider from "react-slick";
import axios from "axios";
function PrevButton({ onClick }) {
  return (
    <span class="slick-prev slick-arrow" onClick={onClick}>
      <i class="fas fa-chevron-left"></i>
    </span>
  );
}
function NextButton({ onClick }) {
  return (
    <span class="slick-next slick-arrow" onClick={onClick}>
      <i class="fas fa-chevron-right"></i>
    </span>
  );
}
export default function SectionBodyRight({
  data,
  setData,
  loading,
  setLoading,
  star,
  change,
  total,
  setTotal,
  brand,
  price,
  page,
  setPage,
  color,
  name,
}) {
  const setting = {
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const Loading = () => {
    return <h1 className="">Loading</h1>;
  };

  useEffect(() => {
    setTimeout(async () => {
      try {
        let query = `http://localhost:5000/product?`;
        query += `page=${page}`;
        if (name) query += `&name=${name}`;
        if (star !== 0) query += `&star=${star}`;
        if (color) query += `&color=${color}`;
        if (price) query += `&price=${price}`;
        if (brand) query += `&brand=${brand}`;
        const getData = await axios.get(query);
        const getTotal =
          parseInt(getData.data.totalPage) % 8 == 0
            ? parseInt(getData.data.totalPage / 8)
            : parseInt(getData.data.totalPage / 8) + 1;
        const total = [...Array(getTotal)].map((_, i) => i + 1);
        setTotal(total);
        setLoading(false);
        setData(getData.data.data);
      } catch (error) {}
    }, 2000);
  }, [page, change, setData, star, color, brand, price, name]);

  useEffect(async () => {
    const getData = await axios.get(
      `http://localhost:5000/product?page=${page}`
    );
    const getTotal =
      parseInt(getData.data.totalPage) % 8 == 0
        ? parseInt(getData.data.totalPage / 8)
        : parseInt(getData.data.totalPage / 8) + 1;
    const total = [...Array(getTotal)].map((_, i) => i + 1);
    setTotal(total);
  }, []);

  return (
    <section class="body-main-right">
      <div class="container-main-right">
        <div class="right-row-1">
          <div class="right-row-title">
            <div class="right-col-title-img">
              <img
                src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/107e6867-a6f6-4eaf-9d06-1c703409ef0e._CR0,0,500,500_SX50_._TTW_.jpg"
                width="44px"
                height="44px"
              />
            </div>
            <div class="right-col-title-name">
              <div class="right-col-title-name-row">
                Editorial recommendations
              </div>
              <div class="right-col-title-link-row">
                <span>By</span>
                <a href="#" class="hover-underline">
                  Better Homes & Gardens
                </a>
                <span>|</span>
                <a
                  class="hover-underline"
                  href="https://www.amazon.com/ospublishing/onsite-associates/info?linkCode=oas&asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&cv_ct_pg=search&cv_ct_wn=osp-single-source-pecos-desktop&cv_ct_we=disclaimer"
                >
                  <span>Earns commissions</span>
                  <span class="info-icon"></span>
                </a>
              </div>
            </div>
          </div>
          <div class="right-row-carousel">
            <Slider class="container-carousel" {...setting}>
              <div class="carousel-card">
                <div class="carousel-card-wrapper">
                  <h5 class="carousel-large-size">
                    Popular Home Products to Buy Online
                  </h5>
                  <div class="carousel-small-size carousel-color margin">
                    Jul 02, 2020 - 10 Recommendations
                  </div>
                  <div class="carousel-small-size margin">
                    The large collection of home goods includes kitchen
                    appliances, closet organizers, wall decor, and so many more
                    finds to refresh your home.
                  </div>
                  <div class="carousel-link">
                    <a href="#" class="btn-expander-label ">
                      Read full article
                    </a>
                  </div>
                </div>
              </div>

              {api.Product.map((item, index) => {
                return (
                  <div class="carousel-card" key={index}>
                    <div class="carousel-card-wrapper">
                      <h5 class="carousel-product-label carousel-small-size margin">
                        {item.title}
                      </h5>
                      <div class="carousel-product">
                        <a
                          class="carousel-image-link margin"
                          href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20"
                        >
                          <img
                            src={item.image}
                            alt="Nordic Ware Natural Aluminum Commercial Baker's Half Sheet, 2-Pack, Silver"
                          />
                        </a>
                        <div class="carousel-name list-department-link carousel-averge-size margin-5">
                          {item.name}
                        </div>
                        <div class="carousel-star margin-5">
                          <span class="carousel-star-number">
                            <span
                              class="star-img"
                              style={{
                                backgroundPosition: `${item.star.position}`,
                              }}
                            ></span>
                            <span
                              class="fas fa-angle-down"
                              aria-hidden="true"
                            ></span>
                          </span>
                          <span class="carousel-link">
                            <a
                              class="btn-expander-label "
                              href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20#customerReviews"
                            >
                              {item.numberVote}
                            </a>
                          </span>
                        </div>
                        <a
                          href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20#customerReviews"
                          class="carousel-product-price margin-5"
                        >
                          <span class="product-price">
                            <span class="dola-icon carousel-sg-small-size">
                              $
                            </span>
                            <span class="dola carousel-large-size">
                              {item.dolar}
                            </span>
                            <span class="cent carousel-sg-small-size">
                              {item.cent}
                            </span>
                          </span>
                          <span
                            class={
                              item.per && item.per.includes("Count")
                                ? "product-price-extra carousel-small-size list-department-link"
                                : "product-price-extra carousel-small-size list-department-link underline"
                            }
                          >
                            {item.per && item.per}
                          </span>
                        </a>
                        <div class="product-logo margin-5">
                          <span class={item.prime && "logo-icon"}></span>
                        </div>
                      </div>
                      <div class="carousel-context carousel-small-size">
                        {item.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div class="right-row-2 ">
          <span class="margin carousel-small-size">
            Price and other details may vary based on product size and color.
          </span>
        </div>
        {loading
          ? Loading()
          : data.map((item, index) => {
              return (
                <div class="right-item" key={index}>
                  <a
                    class="carousel-image-link margin relative"
                    href={`/products/${item._id}`}
                  >
                    <img
                      src={item.image}
                      alt="Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                    />
                    {item.title && (
                      <div class="product-item-wrapper">
                        <span class="product-item">Best Seller</span>
                      </div>
                    )}
                  </a>
                  <div class="margin-5 nav-row-flex justify-center">
                    {item.mutltiColor &&
                      item.mutltiColor.map((item) => {
                        return (
                          <a href="#" class="color-watch ">
                            <span
                              class="color-cricle"
                              style={{ backgroundColor: `${item}` }}
                            ></span>
                          </a>
                        );
                      })}
                  </div>
                  <div class="product-info">
                    <a
                      href={`/products/${item._id}`}
                      class="carousel-name list-department-link carousel-averge-size margin-5"
                    >
                      {item.name}
                    </a>
                    <div class="margin-5 carousel-small-16-bold-size">
                      {item.count && item.count}
                    </div>
                    <div class="carousel-star margin-5">
                      <span class="carousel-star-number">
                        <span
                          class="star-img"
                          style={{
                            backgroundPosition: `${item.star.position}`,
                          }}
                        ></span>
                        <span
                          class="fas fa-angle-down"
                          aria-hidden="true"
                        ></span>
                      </span>
                      <span class="carousel-link">
                        <a
                          class="btn-expander-label "
                          href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20#customerReviews"
                        >
                          {item.numberVote}
                        </a>
                      </span>
                    </div>
                    <a
                      href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&creativeASIN=B0049C2S32&cv_ct_cx=amazonbasics&cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-pecos-desktop&dchild=1&keywords=amazonbasics&linkCode=oas&pd_rd_i=B0049C2S32&pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&pd_rd_w=V2ENe&pd_rd_wg=YAmHS&pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&qid=1632419715&sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&tag=bhgosp-20#customerReviews"
                      class="carousel-product-price margin-5"
                    >
                      <span class="product-price">
                        <span class="dola-icon carousel-sg-small-size">$</span>
                        <span class="dola carousel-large-size">
                          {item.dolar}
                        </span>
                        <span class="cent carousel-sg-small-size">
                          {item.cent}
                        </span>
                      </span>
                      <span
                        class={
                          item.per && item.per.includes("Count")
                            ? "product-price-extra carousel-small-size list-department-link"
                            : "product-price-extra carousel-small-size list-department-link underline"
                        }
                      >
                        {item.per && item.per}
                      </span>
                    </a>
                    <div class="margin-5 carousel-small-size product-price-extra">
                      {item.discount && item.discount}
                    </div>
                    <div class="product-logo margin-5 carousel-small-size product-price-extra">
                      {item.prime && <span class="logo-icon"></span>}
                      <span class="logo-title">
                        {item.time &&
                          item.time.slice(0, item.time.indexOf("as"))}
                        <span class="carousel-small-16-bold-size">
                          {item.time &&
                            item.time.slice(
                              item.time.indexOf("as"),
                              item.time.length
                            )}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div class="carousel-context carousel-small-size product-price-extra">
                    {item.content}
                  </div>
                  {item.remain && (
                    <div class="carousel-context carousel-small-size a-color-price">
                      Only 2 left in stock - order soon
                    </div>
                  )}
                  <div class="carousel-context carousel-small-size ">
                    {item.newDolarOffer && item.newDolarOffer}{" "}
                    <span class="carousel-link">
                      <a
                        class="btn-expander-label"
                        href="https://www.amazon.com/Nordic-Ware-Natural-Aluminum-Commercial/dp/B0049C2S32/ref=sxin_6?asc_contentid=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;asc_contenttype=article&amp;ascsubtag=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;creativeASIN=B0049C2S32&amp;cv_ct_cx=amazonbasics&amp;cv_ct_id=amzn1.osa.05c2e03b-2086-4192-8bd6-a48025f739c8.ATVPDKIKX0DER.en_US&amp;cv_ct_pg=search&amp;cv_ct_we=asin&amp;cv_ct_wn=osp-single-source-pecos-desktop&amp;dchild=1&amp;keywords=amazonbasics&amp;linkCode=oas&amp;pd_rd_i=B0049C2S32&amp;pd_rd_r=bb2b6409-1be6-4e0b-bf90-5e09268a7ef4&amp;pd_rd_w=V2ENe&amp;pd_rd_wg=YAmHS&amp;pf_rd_p=05ad5af5-c700-4e1b-92d5-aeafaae3e0ed&amp;pf_rd_r=RH2AKA4QZ2KSEQWW1BJH&amp;qid=1632419715&amp;sr=1-1-c26ac7f6-b43f-4741-a772-17cad7536576&amp;tag=bhgosp-20#customerReviews"
                      >
                        {item.titleOffer && item.titleOffer}
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
      </div>
      <section class="body-main-bottom">
        <span class="bottom-label">RELATED SEARCHES</span>
        <div class="bottom-grid">
          <div class="bottom-grid-box carousel-link">
            <a href="#" class="bottom-item-link">
              <div class="bottom-item-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="bottom-item-btn">amazonbasics clothes</div>
            </a>
          </div>
          <div class="bottom-grid-box carousel-link ">
            <a href="#" class="bottom-item-link">
              <div class="bottom-item-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="bottom-item-btn">amazon essentials</div>
            </a>
          </div>
          <div class="bottom-grid-box carousel-link">
            <a href="#" class="bottom-item-link">
              <div class="bottom-item-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="bottom-item-btn">amazonbasics kitchen</div>
            </a>
          </div>
          <div class="bottom-grid-box carousel-link">
            <a href="#" class="bottom-item-link">
              <div class="bottom-item-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="bottom-item-btn">strip lighting</div>
            </a>
          </div>
          <div class="bottom-grid-box carousel-link">
            <a href="#" class="bottom-item-link">
              <div class="bottom-item-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="bottom-item-btn">amazonbasics storage</div>
            </a>
          </div>
          <div class="bottom-grid-box carousel-link">
            <a href="#" class="bottom-item-link">
              <div class="bottom-item-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="bottom-item-btn">home bedding</div>
            </a>
          </div>
        </div>
      </section>
      <section class="page body-main-bottom">
        <ul class="pagination">
          {page === 1 ? (
            <li class="pagination-item carousel-averge-size product-price-extra">
              ← <span class="pagination-prev ">Previous</span>
            </li>
          ) : (
            <li
              class="pagination-item"
              onClick={() => {
                setPage(page - 1);
                setLoading(true);
              }}
            >
              <button class="pagination-btn pagi-control carousel-averge-size">
                <span class="pagination-next ">Previous</span>→
              </button>
            </li>
          )}

          {total.map((item, index) => {
            return page === item ? (
              <li
                className="pagination-item"
                key={index}
                onClick={() => {
                  setPage(item);
                  setLoading(true);
                }}
              >
                <a href="#">
                  <button class="pagination-btn active">{item}</button>
                </a>
              </li>
            ) : (
              <li
                className="pagination-item"
                key={index}
                onClick={() => {
                  setPage(item);
                  setLoading(true);
                }}
              >
                <a href="#">
                  <button class="pagination-btn">{item}</button>
                </a>
              </li>
            );
          })}
          {page === total.length ? (
            <li class="pagination-item carousel-averge-size product-price-extra">
              ← <span class="pagination-prev ">Next</span>
            </li>
          ) : (
            <li class="pagination-item">
              <button
                class="pagination-btn pagi-control carousel-averge-size"
                onClick={() => {
                  setPage(page + 1);
                  setLoading(true);
                }}
              >
                <span class="pagination-next ">Next</span>→
              </button>
            </li>
          )}
        </ul>
      </section>
      <section class="body-main-bottom">
        <h1>Need help?</h1>
        <div class="carousel-link margin">
          <a href="#" class="hover-underline">
            Visit the help section or contact us
          </a>
          <span>or</span>
          <a href="#" class="hover-underline">
            contact us
          </a>
        </div>
      </section>
    </section>
  );
}
