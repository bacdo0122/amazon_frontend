/* eslint-disable */
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import axiosApi from "../apiConfig";
import ProductDetails from "../components/ProductDetails";
import Comment from "../components/Comment";
export default function ProductPrivate() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(async () => {
    const res = await axiosApi.get(`/product/${id}`);
    setData(res.data[0]);
  }, []);
  return (
    <>
      <Navbar />
      {data && <ProductDetails {...data} />}
      <Comment productID={id} />
    </>
  );
}
