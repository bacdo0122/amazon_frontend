import React, { useEffect, useState } from "react";
import axios from "axios";
import { covertNumberToStar, checkPercentStar } from "./ButtonControl";
export default function ReviewStar({ productID }) {
  const [totals, setGetTotals] = useState({
    total: 0,
    position: "",
  });
  const [totalUser, setTotalUser] = useState(0);
  const [invidual, setInvidual] = useState({
    fiveStars: 0,
    fourStars: 0,
    thirdStars: 0,
    twoStars: 0,
    oneStars: 0,
  });
  const getComments = async () => {
    const getComment = await axios.get(
      `http://localhost:5000/comment/${productID}/AllComment`
    );
    if (getComment.data.length > 0) {
      const totalStars = getComment.data.reduce((total, item) => {
        return total + item.star.number;
      }, 0);

      const averageStar = totalStars / getComment.data.length;
      console.log(averageStar.toFixed(2));
      setTotalUser(getComment.data.length);
      setGetTotals({
        total: averageStar.toFixed(1),
        position: covertNumberToStar(averageStar),
      });
      setInvidual({
        fiveStars: checkPercentStar(getComment.data, 5),
        fourStars: checkPercentStar(getComment.data, 4),
        thirdStars: checkPercentStar(getComment.data, 3),
        twoStars: checkPercentStar(getComment.data, 2),
        oneStars: checkPercentStar(getComment.data, 1),
      });
    } else {
      setTotalUser(getComment.data.length);
      setGetTotals({
        total: 0,
        position: covertNumberToStar(0),
      });
    }
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="stars_total carousel-link">
      <h2>Customer reviews</h2>
      <div className="totals-star-global">
        <span
          class="star-img"
          style={{ backgroundPosition: `${totals.position}` }}
        ></span>
        <span className="totals-global-rating">{totals.total} out of 5</span>
      </div>
      <div className="global_rating">{totalUser} global ratings</div>
      <a href="#" className="stars-rating">
        5 star
        <span className="rating-wrapper">
          <span
            className="rating"
            style={{ width: `${invidual.fiveStars}%` }}
          ></span>
        </span>
        {invidual.fiveStars}%
      </a>
      <a href="#" className="stars-rating">
        4 star
        <span className="rating-wrapper">
          <span
            className="rating"
            style={{ width: `${invidual.fourStars}%` }}
          ></span>
        </span>
        {invidual.fourStars}%
      </a>
      <a href="#" className="stars-rating">
        3 star
        <span className="rating-wrapper">
          <span
            className="rating"
            style={{ width: `${invidual.thirdStars}%` }}
          ></span>
        </span>
        {invidual.thirdStars}%
      </a>
      <a href="#" className="stars-rating">
        2 star
        <span className="rating-wrapper">
          <span
            className="rating"
            style={{ width: `${invidual.twoStars}%` }}
          ></span>
        </span>
        {invidual.twoStars}%
      </a>
      <a href="#" className="stars-rating">
        1 star
        <span className="rating-wrapper">
          <span
            className="rating"
            style={{ width: `${invidual.oneStars}%` }}
          ></span>
        </span>
        {invidual.oneStars}%
      </a>
    </div>
  );
}
