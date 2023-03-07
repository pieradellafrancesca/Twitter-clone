import { BsTwitter } from "react-icons/bs";
import {
  BiHomeCircle,
  BiHash,
  BiBell,
  BiEnvelope,
  BiBookmark,
} from "react-icons/bi";
import "./index.css";

const MenuContent = () => {
  return (
    <div className="MenuContent">
      <ul>
        <li className="MenuContent__item">
          <BsTwitter className="twitter-logo" />
        </li>
        <li className="MenuContent__item">
          <BiHomeCircle className="birdhouse" />
          <p>Home</p>
        </li>
        <li className="MenuContent__item">
          <BiHash className="hashtag" />
          <p>Explore</p>
        </li>
        <li className="MenuContent__item">
          <BiBell className="notifications" />
          <p>Notifications</p>
        </li>
        <li className="MenuContent__item">
          <BiEnvelope className="messages" />
          <p>Messages</p>
        </li>
        <li className="MenuContent__item">
          <BiBookmark className="bookmarks" />
          <p>Bookmarks</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
