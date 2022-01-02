/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentItem from "./CommentItem";
import CommentPage from "./CommentPage";
import axiosApi from "../apiConfig";
export default function CommentSection({ productID }) {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const getComments = async () => {
    const getComment = await axiosApi.get(`/comment/${productID}?page=${page}`);

    setComments(getComment.data);
  };
  useEffect(() => {
    getComments();
  }, [page]);
  return (
    <div className="comments-wrapper">
      {comments.map((item, index) => {
        return <CommentItem {...item} key={index} />;
      })}
      <CommentPage page={page} setPage={setPage} productID={productID} />
    </div>
  );
}
