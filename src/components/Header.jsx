import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import useStateValue from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="img----"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login " className="header__link">
          <div className="header_option">
            <span className="header__optionOne">Hello Qazi</span>
            <span className="header__optionTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/ " className="header__link">
          <div className="header_option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/ " className="header__link">
          <div className="header_option">
            <span className="header__optionOne"> Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>
      </div>
      <Link to="/checkout" className="header__link">
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
