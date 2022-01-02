import React from "react";
import CommentSection from "./CommentSection";
import ReviewStar from "./ReviewStar";

export default function Comment({ productID }) {
  return (
    <div className="Review_section">
      <ReviewStar productID={productID} />
      <CommentSection productID={productID} />
    </div>
  );
}
