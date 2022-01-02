/* eslint-disable */
import React, { useEffect, useState, useCallback } from "react";
import { covertNumberToStar, covertDate } from "./ButtonControl";
import ImageAndVideo from "./ImageAndVideo";
import axiosApi from "../apiConfig";
export default function CommentItem({
  product,
  user,
  star,
  createAt,
  type,
  context,
  image,
  _id,
  reponse,
}) {
  const [likes, setLikes] = useState([]);
  const [userLike, setUserLike] = useState(false);
  const [info, setInfo] = useState({ type: "", url: "" });
  const [appear, setAppear] = useState(false);
  const check = () => {
    const checkUserLike = likes.filter((item) => {
      return (
        item.userID._id === JSON.parse(localStorage.getItem("username"))._id
      );
    });

    if (checkUserLike.length > 0) {
      console.log(checkUserLike.length, true);
      setUserLike(false);
      return true;
    } else {
      console.log(checkUserLike.length, false);
      setUserLike(true);
      return false;
    }
  };

  const getLike = useCallback(async () => {
    const getLikes = await axiosApi.get(`/like/${product._id}/${_id}`);

    setLikes(() => getLikes.data);
    const checkUserLike = getLikes.data.filter((item) => {
      return (
        item.userID._id === JSON.parse(localStorage.getItem("username"))._id
      );
    });
    if (checkUserLike.length > 0) {
      setUserLike(true);
    } else {
      setUserLike(false);
    }
  }, [product._id, _id]);

  useEffect(() => {
    getLike();
  }, [getLike]);

  const handleCheck = async () => {
    if (check()) {
      await axiosApi.delete(`/like/${likes[0]._id}`);
    } else {
      await axiosApi.post("/like", {
        userID: JSON.parse(localStorage.getItem("username"))._id,
        commentID: _id,
        productID: product._id,
      });
    }
    const getLikes = await axiosApi.get(`/like/${product._id}/${_id}`);
    setLikes(() => getLikes.data);
  };
  return (
    <div className="comment-item">
      <div className="name-image-user">
        <img src={user.image} alt="" />
        <span className="name-user-comment">{user.username}</span>
      </div>
      <div>
        <span
          className="star-img"
          style={{
            backgroundPosition: `${covertNumberToStar(star.number)}`,
          }}
        ></span>
      </div>
      <div className="createAt global_rating">
        Reviewed in the United States on {covertDate(createAt)}
      </div>
      <div className="style_product global_rating">Style: {type}</div>
      <div className="context">{context}</div>
      <div className="image-wrapper">
        {image &&
          image.map((item, index) => {
            return (
              <ImageAndVideo
                item={item}
                info={info}
                setAppear={setAppear}
                setInfo={setInfo}
                key={index}
              />
            );
          })}
      </div>
      {appear && (
        <div className="zoom">
          {info.type === "image" ? (
            <img src={info.url} alt={info.type} />
          ) : (
            <video controls>
              <source src={info.url} type="video/mp4" />
            </video>
          )}
        </div>
      )}
      {reponse && (
        <div className="reponsive">
          <h3>Reponse of seller</h3>
          <div className="reponsive_text">{reponse}</div>
        </div>
      )}

      <svg
        width="14px"
        height="13px"
        viewBox="0 0 14 13"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fill={userLike ? "#ee4d2d" : "black"}
        onClick={() => {
          handleCheck();
        }}
        className="like-svg"
      >
        <defs></defs>
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
          <g
            id="Product-Ratings-Working"
            transform="translate(-245.000000, -855.000000)"
            fill-rule="nonzero"
          >
            <g transform="translate(155.000000, 92.000000)">
              <g transform="translate(40.000000, 184.000000)">
                <g transform="translate(0.000000, 326.000000)">
                  <g transform="translate(50.000000, 253.000000)">
                    <g>
                      <path d="M0,12.7272727 L2.54545455,12.7272727 L2.54545455,5.09090909 L0,5.09090909 L0,12.7272727 Z M14,5.72727273 C14,5.02727273 13.4272727,4.45454545 12.7272727,4.45454545 L8.71818182,4.45454545 L9.35454545,1.52727273 L9.35454545,1.33636364 C9.35454545,1.08181818 9.22727273,0.827272727 9.1,0.636363636 L8.4,0 L4.2,4.2 C3.94545455,4.39090909 3.81818182,4.70909091 3.81818182,5.09090909 L3.81818182,11.4545455 C3.81818182,12.1545455 4.39090909,12.7272727 5.09090909,12.7272727 L10.8181818,12.7272727 C11.3272727,12.7272727 11.7727273,12.4090909 11.9636364,11.9636364 L13.8727273,7.44545455 C13.9363636,7.31818182 13.9363636,7.12727273 13.9363636,7 L13.9363636,5.72727273 L14,5.72727273 C14,5.79090909 14,5.72727273 14,5.72727273 Z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>

      {likes.length > 0 ? likes.length : "Hữu Ích?"}
    </div>
  );
}
