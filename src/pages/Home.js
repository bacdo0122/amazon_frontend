import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionControl from "../components/SectionControl";
import SectionUser from "../components/SectionUser";
import Slider from "react-slick";

export default function Home() {
  const setting = {
    speed: 300,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <>
      <Navbar />

      <div id="body">
        <div>
          <img
            id="img-big"
            src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
            alt=""
          />
        </div>
        <div class="box">
          <div
            class="grid-container"
            style={{ marginBottom: "25px !important" }}
          >
            <div class="grid-item">
              <div>
                <h2 class="title">AmazonBasics</h2>
              </div>
              <div>
                <a href="/products">
                  <img
                    class="image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    class="landscape-image"
                    data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
                  />
                </a>
              </div>
              <a class="see-more" href="">
                See more
              </a>
            </div>
            <div class="grid-item">
              <div>
                <h2 class="title">Deal & Promotion</h2>
              </div>
              <div>
                <a href="">
                  <img
                    class="image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a class="see-more" href="">
                See more
              </a>
            </div>
            <div class="grid-item">
              <div>
                <h2 class="title">Computers</h2>
              </div>
              <div>
                <a href="">
                  <img
                    class="image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a class="see-more" href="">
                See more
              </a>
            </div>
            <div class="grid-item">
              <div>
                <h2 class="title">Sign in for the best experience</h2>
                <button
                  style={{
                    backgroundColor: "rgb(255,216,20)",
                    width: "300px",
                    height: "30px",
                    borderRadius: "9px",
                    marginBottom: "70px",
                    marginTop: "30px",
                  }}
                >
                  Sign in securely
                </button>
              </div>
              <div>
                <a href="">
                  <img
                    id="image-div1"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="grid-container">
            <div class="grid-item">
              <div>
                <h2 class="title">Oculus</h2>
              </div>
              <div>
                <a href="">
                  <img
                    class="image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a class="see-more" href="">
                Shop now
              </a>
            </div>
            <div class="grid-item">
              <div>
                <h2 class="title">Shop by Category</h2>
              </div>
              <div>
                <a href="">
                  <img
                    class="image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMTJP-q5zhmEDauVX3HzpMPDykf_4Gqc_gw&usqp=CAU"
                    alt=""
                  />
                </a>
              </div>
              <a class="see-more" href="">
                Shop now
              </a>
            </div>
            <div class="grid-item">
              <div>
                <h2 class="title">Gaming accessories</h2>
              </div>
              <div>
                <a href="">
                  <img
                    class="image"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </a>
              </div>
              <a class="see-more" href="">
                See more
              </a>
            </div>
            <div class="grid-item">
              <div>
                <h2 class="title">Find your ideal TV</h2>
              </div>
              <div>
                <a href="">
                  <img
                    class="image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <a class="see-more" href="">
                See more
              </a>
            </div>
          </div>

          <div style={{ margin: "20px 0" }}>
            <h2>
              Best Sellers in Kitchen
              <a
                style={{ fontSize: "70%", paddingLeft: "15px" }}
                class="see-more"
                href=""
              >
                Shop now
              </a>
            </h2>
            <div class="splide">
              <div class="splide__track">
                <Slider class="splide__list" {...setting}>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/31ZXXTy7wMS._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/411t4QoLZaL._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/415Qve1z+uS._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/41N8AxIJq4L._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/41NPVXxKO3L._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/41uH1KmKu2S._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/51dQ0smVkpL._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/411UtdiqB5L._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/41MUBAPIW7L._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/41fgkBDrkxL._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/31FZDSUNb3L._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li class="splide__slide">
                    <a href="">
                      <img
                        class="list-image"
                        src="https://m.media-amazon.com/images/I/41zR9OmibVL._AC_SY200_.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionControl />
      <SectionUser />
      <Footer />
    </>
  );
}
