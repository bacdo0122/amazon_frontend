import React, { useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";
import axios from "axios";
export default function SectionBodyLeft({
  setData,
  setLoading,
  setStar,
  setChange,
  setTotal,
  setBrand,
  setPrice,
  setPage,
  setColor,
  setName,
  name,
}) {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setActive(!active);
    if (active === false) {
      document.querySelector(".btn-expander-label").innerHTML =
        "See Fewer Departments";
      document
        .querySelector(".btn-expander .fas")
        .classList.remove("fa-angle-down");
      document.querySelector(".btn-expander .fas").classList.add("fa-angle-up");
    } else {
      document.querySelector(".btn-expander-label").innerHTML =
        "See All 17 Departments";
      document
        .querySelector(".btn-expander .fas")
        .classList.remove("fa-angle-up");
      document
        .querySelector(".btn-expander .fas")
        .classList.add("fa-angle-down");
    }
  };
  return (
    <section class="body-main-left">
      <div class="main-left">
        <div class="main-left-list-department">
          <span class="list-department-label">Department</span>
          <ul class="list-department">
            {api.Department.slice(0, 8).map((item, index) => {
              return (
                <li class="list-department-item" key={index}>
                  <a href="#" class="list-department-link">
                    {item}
                  </a>
                </li>
              );
            })}
            <li class="list-department-item">
              <a href="#" class="list-department-link">
                <ul class="expander-content-list">
                  {active &&
                    api.Department.slice(8, api.Department.length).map(
                      (item, index) => {
                        return (
                          <li class="list-department-item" key={index}>
                            <a href="#" class="list-department-link">
                              {item}
                            </a>
                          </li>
                        );
                      }
                    )}
                </ul>
                <li
                  class="list-department-item"
                  onClick={(e) => handleClick(e)}
                >
                  <a class="list-department-link">
                    <span class="btn-expander">
                      <span class="fas fa-angle-down" aria-hidden="true"></span>
                      <span class="btn-expander-label">
                        See All 17 Departments
                      </span>
                    </span>
                  </a>
                </li>
              </a>
            </li>
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Customer Reviews</span>
          <ul class="list-department">
            {api.Star.map((item, index) => {
              return (
                <li class="list-department-item" key={index}>
                  <Link
                    to="#"
                    class="list-department-link  nav-row-flex"
                    onClick={async () => {
                      try {
                        setPage(1);
                        setStar(item.star);
                        setLoading(true);
                        setChange(true);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                  >
                    <span
                      class="star-img"
                      style={{ backgroundPosition: `${item.position}` }}
                    ></span>
                    <span class="review-label-up">&amp; Up</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Brand</span>
          <ul class="list-department">
            {api.Brand.map((item, index) => {
              return (
                <li
                  class="list-department-item"
                  key={index}
                  onClick={() => {
                    try {
                      setPage(1);
                      setBrand(item);

                      setLoading(true);
                      setChange(true);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <a href="#" class="list-department-link  ">
                    <div class="brand-checkbox nav-row-flex ">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <span class="brand-name">{item}</span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Price</span>
          <ul class="list-department">
            <li
              class="list-department-item"
              onClick={() => {
                try {
                  setPage(1);
                  setPrice("Under $25");
                  setLoading(true);
                  setChange(true);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <a href="#" class="list-department-link">
                <div class="Price-item nav-row-flex ">
                  <span class="Price-name">Under $25</span>
                </div>
              </a>
            </li>
            <li
              class="list-department-item"
              onClick={() => {
                try {
                  setPrice("$25 to $50");
                  setPage(1);
                  setLoading(true);
                  setChange(true);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <a href="#" class="list-department-link ">
                <div class="Price-item nav-row-flex ">
                  <span class="Price-name">$25 to $50</span>
                </div>
              </a>
            </li>
            <li
              class="list-department-item "
              onClick={() => {
                try {
                  setPrice("$50 to $100");
                  setPage(1);
                  setLoading(true);
                  setChange(true);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <a href="#" class="list-department-link ">
                <div class="Price-item nav-row-flex ">
                  <span class="Price-name">$50 to $100</span>
                </div>
              </a>
            </li>
            <li
              class="list-department-item"
              onClick={() => {
                try {
                  setPrice("$100 to $200");
                  setPage(1);
                  setLoading(true);
                  setChange(true);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <a href="#" class="list-department-link ">
                <div class="Price-item nav-row-flex ">
                  <span class="Price-name">$100 to $200</span>
                </div>
              </a>
            </li>
            <li
              class="list-department-item"
              onClick={() => {
                try {
                  setPrice("$200 to Above");
                  setPage(1);
                  setLoading(true);
                  setChange(true);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              <a href="#" class="list-department-link ">
                <div class="Price-item nav-row-flex ">
                  <span class="Price-name">$200 & Above</span>
                </div>
              </a>
            </li>
            <li class="list-department-item">
              <form
                id="form-price"
                onSubmit={(e) => {
                  e.preventDefault();
                  const min_price = document.querySelector("#min").value;
                  const max_price = document.querySelector("#max").value;
                  setPrice(`$${min_price} to $${max_price}`);
                  setPage(1);
                  setLoading(true);
                  setChange(true);
                }}
              >
                <div class="Price-item nav-row-flex ">
                  <div class="min-price price-wrapper">
                    <span class="price-value">$</span>
                    <input
                      type="text"
                      class="price-input"
                      id="min"
                      placeholder="Min"
                    />
                  </div>
                  <div class="max-price price-wrapper">
                    <span class="price-value">$</span>
                    <input
                      type="text"
                      class="price-input"
                      id="max"
                      placeholder="Max"
                    />
                  </div>
                  <div class="price-btn-submit">
                    <button type="submit" id="Submit">
                      Go
                    </button>
                  </div>
                </div>
              </form>
            </li>
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Color</span>
          <ul class="list-department grid-color">
            {api.Color.map((item, index) => {
              return (
                <li
                  class="list-department-item"
                  key={index}
                  onClick={() => {
                    try {
                      setColor(item.type);
                      setPage(1);
                      setLoading(true);
                      setChange(true);
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                >
                  <a href="#" class="list-department-link  ">
                    <div class="Color-wrapper nav-row-flex ">
                      <span
                        class="color-name "
                        style={{ backgroundPosition: `${item.color}` }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundPosition = `${item.position}`)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundPosition = `${item.color}`)
                        }
                      ></span>
                      <span class="stick-icon"></span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">From Our Brands</span>
          <ul class="list-department">
            <li class="list-department-item">
              <a href="#" class="list-department-link  ">
                <div class="brand-checkbox nav-row-flex ">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <span class="brand-name">Our Brands</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Packaging Option</span>
          <ul class="list-department">
            <li class="list-department-item">
              <a href="#" class="list-department-link  ">
                <div class="brand-checkbox nav-row-flex ">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <span class="brand-name">Frustration-Free Packaging</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Condition</span>
          <ul class="list-department">
            <li class="list-department-item">
              <a href="#" class="list-department-link">
                <div class="Price-item nav-row-flex ">
                  <span class="Price-name">New</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="main-custom-review">
          <span class="list-department-label">Availability</span>
          <ul class="list-department">
            <li class="list-department-item">
              <a href="#" class="list-department-link  ">
                <div class="brand-checkbox nav-row-flex ">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <span class="brand-name">Include Out of Stock</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <button
          className="btn-Delete"
          onClick={async () => {
            try {
              const getData = await axios.get(
                `http://localhost:5000/product?page=1`
              );
              const getTotal =
                parseInt(getData.data.totalPage) % 8 == 0
                  ? parseInt(getData.data.totalPage / 8)
                  : parseInt(getData.data.totalPage / 8) + 1;
              const total = [...Array(getTotal)].map((_, i) => i + 1);
              setTotal(total);
              setData(getData.data.data);
              setLoading(true);
              setBrand(null);
              setPrice(null);
              setColor(null);
              setStar(0);
              setChange(false);
              setName(null);
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Xóa tất cả
        </button>
        {localStorage.getItem("username") && (
          <button className="btn-Delete">
            <a href="/my_products" style={{ color: "white" }}>
              Show my products
            </a>
          </button>
        )}
      </div>
    </section>
  );
}
