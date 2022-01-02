/* eslint-disable */
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionBodyLeft from "../components/SectionBodyLeft";
import SectionBodyRight from "../components/SectionBodyRight";
import SectionControl from "../components/SectionControl";
import SectionResult from "../components/SectionResult";
import SectionUser from "../components/SectionUser";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../redux/action";
export default function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [star, setStar] = useState(0);
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState(null);
  const [change, setChange] = useState(false);
  const [total, setTotal] = useState([]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Add(JSON.parse(localStorage.getItem("cart"))));
  }, []);
  return (
    <>
      <Navbar
        setName={setName}
        setPage={setPage}
        setLoading={setLoading}
        setChange={setChange}
      />
      <SectionResult />
      <div className="body-main">
        <SectionBodyLeft
          setData={setData}
          setLoading={setLoading}
          setStar={setStar}
          setChange={setChange}
          setTotal={setTotal}
          setBrand={setBrand}
          setPrice={setPrice}
          setPage={setPage}
          setColor={setColor}
          setName={setName}
          name={name}
        />
        <SectionBodyRight
          data={data}
          setData={setData}
          loading={loading}
          setLoading={setLoading}
          star={star}
          change={change}
          total={total}
          setTotal={setTotal}
          brand={brand}
          price={price}
          page={page}
          color={color}
          setPage={setPage}
          name={name}
        />
      </div>
      <SectionUser />
      <SectionControl />
      <Footer />
    </>
  );
}
