/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CommentPage({ page, setPage, productID }) {
  const [totalPages, setTotalPages] = useState(null);
  const getComments = async () => {
    const getComment = await axios.get(
      `http://localhost:5000/comment/${productID}/AllComment`
    );
    const getTotal =
      parseInt(getComment.data.length) % 1 == 0
        ? parseInt(getComment.data.length / 1)
        : parseInt(getComment.data.length / 1) + 1;
    // const total = [...Array(getTotal)].map((_, i) => i + 1);
    const total = [1, 2, "...", 4, 5, 6, 7, 8, "..."];
    setTotalPages(total);
  };
  const pageItem = () => {};
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
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
              }}
            >
              <button class="pagination-btn pagi-control carousel-averge-size">
                <span class="pagination-next ">Previous</span>→
              </button>
            </li>
          )}

          {totalPages &&
            totalPages.map((item, index) => {
              return page === item ? (
                <li
                  className="pagination-item"
                  key={index}
                  onClick={() => {
                    setPage(item);
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
                  }}
                >
                  <a href="#">
                    <button class="pagination-btn">{item}</button>
                  </a>
                </li>
              );
            })}
          {totalPages && page === totalPages.length ? (
            <li class="pagination-item carousel-averge-size product-price-extra">
              ← <span class="pagination-prev ">Next</span>
            </li>
          ) : (
            <li class="pagination-item">
              <button
                class="pagination-btn pagi-control carousel-averge-size"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                <span class="pagination-next ">Next</span>→
              </button>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}
