import { useState } from "react";
import { HiOutlineMenu, HiOutlineSparkles } from "react-icons/hi";
import { BsTwitter } from "react-icons/bs";
import { SiSurveymonkey } from "react-icons/si";
import HamburgerMenu from "../hamburgerMenu";
import "./index.css";

const Header = ({ showHeaderUp, setHeaderInput }) => {
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerClick = () => {
    setShowMenu((prev) => !prev);
  };

  const [inputValue, setInputValue] = useState("");

  // al cambio di ogni input mi salva il nuovo valore:
  const onHandleChange = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    setHeaderInput(inputValue);
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
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="What's happening?"
            value={inputValue}
            onChange={onHandleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
