import MenuContent from "../menuContent";
import "./index.css";

const HamburgerMenu = ({ showMenu }) => {
  return (
    <div className={`HamburgerMenu ${showMenu ? "show" : ""}`}>
      <MenuContent />
    </div>
  );
};

export default HamburgerMenu;
