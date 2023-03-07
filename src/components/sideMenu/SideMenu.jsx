import "./index.css";

import MenuContent from "../menuContent";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <MenuContent />
      <button className="SideMenu__btn">Tweet</button>
    </div>
  );
};

export default SideMenu;
