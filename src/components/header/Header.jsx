import { useState } from "react";
import { HiOutlineMenu, HiOutlineSparkles } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { SiSurveymonkey } from "react-icons/si";
import HamburgerMenu from "../hamburgerMenu";
import "./index.css";

const Header = ({ showHeaderUp }) => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="Header">
      <div className={`Header__up ${!showHeaderUp ? "notVisible" : ""}`}>
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
      <div className="Header__down">
        <SiSurveymonkey className="Header__down--profile" />
        <input type="text" placeholder="What's happening?" />
      </div>
    </div>
  );
};

export default Header;
