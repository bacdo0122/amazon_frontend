import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionControl from "../components/SectionControl";
import SectionUser from "../components/SectionUser";
import { useDispatch } from "react-redux";
import { Add } from "../redux/action";
/* eslint-disable */
import { deleteButton } from "../components/ButtonControl";
import { useNavigate } from "react-router-dom";
export default function CartList() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [check, setCheck] = useState({
    check: false,
    name: "",
  });
  useEffect(() => {
    if (!localStorage.getItem("username")) {
      history("/login", { replace: true });
    }
  }, []);
  return (
    <div className="cart_window">
      {check.check && (
        <div className="popup">
          <div className="black-window"></div>
          <div className="popup__container">
            <div className="popup_title">
              Bạn chắc chắn muốn bỏ sản phẩm này?
            </div>
            <div className="popup_name">{check.name}</div>
            <div className="popup_button">
              <button
                className="btn-solid-primary btn_accept"
                onClick={() => {
                  deleteButton(check.name, dispatch, Add);
                  setCheck({
                    check: false,
                    name: "",
                  });
                }}
              >
                có
              </button>
              <div className="btn-spacer"></div>
              <button
                className="btn-solid-primary btn_refuse"
                onClick={() =>
                  setCheck({
                    check: false,
                    name: "",
                  })
                }
              >
                Không
              </button>
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <Cart check={check} setCheck={setCheck} />
      <SectionControl />
      <SectionUser />
      <Footer />
    </div>
  );
}
