import { useState } from "react";
import { HiOutlineMenu, HiOutlineSparkles } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import HamburgerMenu from "../hamburgerMenu";
import "./index.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="Header">
      <ul>
        <li className="Header__item">
          <HiOutlineMenu className="Header__icon" onClick={hamburgerClick} />
          <HamburgerMenu showMenu={showMenu} />
        </li>
        <li className="Header__item">
          <BsTwitter className="Header__icon" />
        </li>
        <li className="Header__item">
          <HiOutlineSparkles className="Header__icon" />
        </li>
      </ul>
    </div>
  );
};

export default Header;