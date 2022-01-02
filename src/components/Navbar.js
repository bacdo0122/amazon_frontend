import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "../redux/action";
export default function Navbar({ setName, setPage, setLoading, setChange }) {
  const getTotal = useSelector((state) => state.product).total;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Add(JSON.parse(localStorage.getItem("cart"))));
  }, []);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("username"))
  );

  return (
    <header className="header navbar">
      <div className="navbar-head">
        <div className="navbar-head-left">
          <div className="navbar-left-logo">
            <a href="/products" className="logo  nav-hover">
              <span className="nav-logo"></span>
            </a>
          </div>
          <div className="navbar-left-location">
            <span className="nav-global-location">
              <a className="nav-location-link nav-hover ">
                <i className="fas fa-map-marker-alt "></i>
                <div className="nav-location-name">
                  <span className="name-line-1">Deliver to</span>
                  <span className="name-line-2">Vietnam</span>
                </div>
              </a>
            </span>
          </div>
        </div>
        <div className="navbar-head-center">
          <div className="center-input-wrapper">
            <form
              className="navbar-form-input"
              onSubmit={(e) => {
                e.preventDefault();

                setName(document.querySelector(".nav-input").value);
                setPage(1);
                setLoading(true);
                setChange(true);
              }}
            >
              <div className="nav-search">
                <div className="nav-search-wrapper">
                  <div className="nav-search-label">
                    <span className="search-label">All</span>
                    <i className="fas fa-angle-down"></i>
                  </div>
                  <select className="nav-search-dropdown" title="Search in">
                    <option selected="selected" value="All">
                      All Departments
                    </option>
                    <option value="Arts&Crafts">Arts &amp; Crafts</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Baby">Baby</option>
                    <option value="Beauty&Personal Care">
                      Beauty &amp; Personal Care
                    </option>
                    <option value="Books">Books</option>
                    <option value="Computers">Computers</option>
                    <option value="Digital Music">Digital Music</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Kindle Store">Kindle Store</option>
                    <option value="Prime Video">Prime Video</option>
                    <option value="Women's Fashion">Women's Fashion</option>
                    <option value="Men's Fashion">Men's Fashion</option>
                    <option value="Girls' Fashion">Girls' Fashion</option>
                    <option value="Boys' Fashion">Boys' Fashion</option>
                    <option value="Deals">Deals</option>
                    <option value="Health&Household">
                      Health &amp; Household
                    </option>
                    <option value="Home&Kitchen">Home &amp; Kitchen</option>
                    <option value="Industrial&Scientific">
                      Industrial &amp; Scientific
                    </option>
                    <option value="Luggage">Luggage</option>
                    <option value="Movies&TV">Movies &amp; TV</option>
                    <option value="Music&CDs&Vinyl">
                      Music, CDs &amp; Vinyl
                    </option>
                    <option value="Pet Supplies">Pet Supplies</option>
                    <option value="Software">Software</option>
                    <option value="Sports&Outdoors">
                      Sports &amp; Outdoors
                    </option>
                    <option value="Tools&Home Improvement">
                      Tools &amp; Home Improvement
                    </option>
                    <option value="Toys&Games">Toys &amp; Games</option>
                    <option value="Video Games">Video Games</option>
                  </select>
                </div>
              </div>
              <div className="nav-input-wrapper">
                <div className="input-text-frame">
                  <input type="text" className="nav-input" />
                </div>
              </div>
              <button type="submit" className="nav-submit-wrapper">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="navbar-head-right nav-row-flex">
          <a
            href="https://www.amazon.com/gp/customer-preferences/select-language/ref=topnav_lang_ais?preferencesReturnUrl=%2Fs%3Fk%3Damazonbasics%26pd_rd_r%3De2461ab7-730d-49bd-851f-e2d8b5ebcab9%26pd_rd_w%3DaKEp5%26pd_rd_wg%3DRo4Fu%26pf_rd_p%3D9349ffb9-3aaa-476f-8532-6a4a5c3da3e7%26pf_rd_r%3DV2K9YYMK4W6AX1CYG5WB%26ref%3Dpd_gw_unk"
            target="_blank"
            className="nav-hover nav-col-flex"
          >
            <span className="nav-flag">
              <span className="nav-line-flag"></span>
              <span className="nav-flag-icon">
                <span className="fas fa-angle-down"></span>
              </span>
            </span>
          </a>
          {!user ? (
            <>
              <a href="/login" className="nav-hover nav-col-flex">
                <div className="nav-line-1 nav-font">Hello, Sign in</div>
                <span className="nav-line-2 nav-font">
                  Account & List <i className="fas fa-angle-down"></i>
                </span>
              </a>
            </>
          ) : (
            <a
              className="nav-hover nav-col-flex"
              target="_blank"
              style={{ cursor: "pointer" }}
            >
              <div className="nav-line-1 nav-font">Hello, {user.username}</div>
            </a>
          )}
          <a
            href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fs%3Fk%3Damazonbasics%26pd_rd_r%3De2461ab7-730d-49bd-851f-e2d8b5ebcab9%26pd_rd_w%3DaKEp5%26pd_rd_wg%3DRo4Fu%26pf_rd_p%3D9349ffb9-3aaa-476f-8532-6a4a5c3da3e7%26pf_rd_r%3DV2K9YYMK4W6AX1CYG5WB%26ref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&"
            className="nav-hover nav-col-flex"
            target="_blank"
          >
            <span className="nav-line-1 nav-font">Returns</span>
            <span className="nav-line-2 nav-font">&amp; Orders</span>
          </a>
          <a href="/cart" className="nav-hover nav-margin nav-row-flex">
            <div className="nav-cart-count">
              <span className="nav-cart-number">{getTotal ? getTotal : 0}</span>
              <span className="nav-cart-icon"></span>
            </div>
            <div className="nav-cart-label">
              <span className="nav-line-2 nav-font">Cart</span>
            </div>
          </a>
        </div>
      </div>
      <div className="navbar-main">
        <div className="container-wrapper">
          <ul className="main-list">
            <li className="main-item">
              <a href="#" className="main-item-link nav-hover">
                <span className="main-icon"></span>
                <span className="main-icon-label">All</span>
              </a>
            </li>
            <li className="main-item">
              <a href="#" className="main-item-link nav-hover">
                Today's Deals
              </a>
            </li>
            <li className="main-item">
              <a href="#" className="main-item-link nav-hover">
                Customer Service
              </a>
            </li>
            <li className="main-item">
              <a href="#" className="main-item-link nav-hover">
                Registry
              </a>
            </li>
            <li className="main-item">
              <a href="#" className="main-item-link nav-hover">
                Gift Cards
              </a>
            </li>
            <li className="main-item">
              <a href="#" className="main-item-link nav-hover">
                Sell
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
