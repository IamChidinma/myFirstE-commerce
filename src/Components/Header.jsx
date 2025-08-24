import React, { useState } from "react";
import "./Header.css";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";
import logo from "../assets/logo.png";
import DropDown from "./DropDown";
const Header = () => {
  const [showDRop, setShowDrop] = useState(false);
  const [searchShow, setsearchShow] = useState(false);
  const [profileShow, setprofileShow] = useState(false);
  const [mobileShow, setmobileShow] = useState(false);

  return (
    <div className="Header_Body">
      <header className="Header_wrapper">
        <img src={logo} alt="Velvet Muse Logo" className="logo" />

        <article className="right_Header_side">
          <nav>
            <ul>
              <li>Name</li>
              <li>About</li>
              <li onMouseEnter={() => setShowDrop(true)}>show</li>
            </ul>
          </nav>
          <div className="profile_with_icon">
            <div className="icon_with_count">
              <FaCartShopping className="icon" />
              <div className="icon_count">0</div>
            </div>
            <div className="icon_with_count">
              <FaHeart className="icon" />
              <div className="icon_count">33</div>
            </div>
            <FaSearch
              className="icon"
              onClick={() => setsearchShow(!searchShow)}
            />
            <FaUserCircle
              className="icon_profile"
              onClick={() => setprofileShow(!profileShow)}
            />
            {!mobileShow ? (
              <RiMenuUnfold3Fill
                className="icon_menu_icon"
                onClick={() => setmobileShow(true)}
              />
            ) : (
              <RiMenuUnfold4Fill
                className="icon_menu_icon"
                onClick={() => setmobileShow(false)}
              />
            )}
          </div>
          {showDRop ? (
            <div
              className="Drop_show_body"
              onMouseLeave={() => setShowDrop(false)}
            >
              <DropDown />
            </div>
          ) : null}
        </article>
        {mobileShow ? <div className="Mobile_nav"></div> : null}
        {searchShow ? (
          <div className="Search_body_show">
            <input
              type="text"
              className="Search"
              placeholder="Search For Items"
            />
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default Header;
