import "./index.css";

import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineHeart,
  HiArrowUpTray,
} from "react-icons/hi2";

const MessageItem = ({ messageData }) => {
  const { photo, userName, body, email } = messageData;
  return (
    <div className="MessageItem">
      <img src={photo} alt={userName} className="MessageItem__img" />
      <div className="MessageItem__content">
        <span>{userName}</span>
        <span>{email}</span>
        <p>{body}</p>
        <div className="MessageItem__content--icons">
          <HiOutlineChatBubbleOvalLeft className="messageItem-icon" />
          <HiOutlineArrowPathRoundedSquare className="messageItem-icon" />
          <HiOutlineHeart className="messageItem-icon" />
          <HiArrowUpTray className="messageItem-icon" />
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
