/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../css/register.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Update() {
  const history = useNavigate();
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    const product = await axios.get(`http://localhost:5000/product/${id}`);
    setData(product.data[0]);
  }, []);
  return (
    <div className="app">
      <div class="container_register">
        <div class="register_form">
          <h2>Update Form</h2>
          <form
            class="form_register"
            onSubmit={async (e) => {
              e.preventDefault();
              console.log(id);
              const name = document.querySelector("#Name").value;
              const dolar = document.querySelector("#dolar").value;
              const cent = document.querySelector("#Cent").value;
              const brand = document.querySelector("#brand").value;
              const content = document.querySelector("#content").value;
              const time = document.querySelector("#Time").value;
              const color = document.querySelector("#Color").value;
              const update = await axios.patch(
                `http://localhost:5000/product/${id}`,
                {
                  name,
                  dolar,
                  cent,
                  brand,
                  content,
                  time,
                  color,
                }
              );
              history("/my_products", { replace: true });
            }}
          >
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">Name</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Your UserName"
                    id="Name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div class="input-error UserName-Error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">dolar</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Your dolar"
                    id="dolar"
                    value={data && data.dolar}
                    onChange={(e) =>
                      setData({ ...data, dolar: e.target.value })
                    }
                  />
                </div>
                <div class="input-error Password-Error"></div>
              </div>
            </div>
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">Cent</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Cent"
                    id="Cent"
                    value={data && data.cent}
                    onChange={(e) => setData({ ...data, cent: e.target.value })}
                  />
                </div>
                <div class="input-error RepeatPassword-Error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">brand</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Your brand"
                    id="brand"
                    value={data && data.brand}
                    onChange={(e) =>
                      setData({ ...data, brand: e.target.value })
                    }
                  />
                </div>
                <div class="input-error Email-Error"></div>
              </div>
            </div>
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">content</div>
                <div class="input-col">
                  <input
                    type="text"
                    placeholder="Your  content"
                    id="content"
                    value={data && data.content}
                    onChange={(e) =>
                      setData({ ...data, content: e.target.value })
                    }
                  />
                </div>
                <div class="input-error Name-Error"></div>
              </div>
              <div class="col-form">
                <div class="label-col">Time</div>
                <div class="input-col">
                  <input
                    type="text"
                    id="Time"
                    placeholder="Time"
                    value={data && data.time}
                    onChange={(e) => setData({ ...data, time: e.target.value })}
                  />
                </div>
                <div class="input-error Time-Error"></div>
              </div>
            </div>
            <div class="row-form">
              <div class="col-form">
                <div class="label-col">Color</div>
                <div class="input-col">
                  <div class="radio-input mr">
                    <input
                      type="text"
                      name="color"
                      placeholder="Color"
                      id="Color"
                      value={data && data.color}
                      onChange={(e) =>
                        setData({ ...data, color: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="input-error"></div>
              </div>
            </div>
            <div class="submit-form">
              <input type="submit" id="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
