import { useState, useEffect } from "react";

import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineHeart,
  HiArrowUpTray,
} from "react-icons/hi2";
import "./index.css";

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData;

  const [userItem, setUserItem] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserItem(data));
  }, []);

  return (
    <div className="MessageItem">
      <img
        src={userItem.image}
        alt={userItem.username}
        className="MessageItem__img"
      />
      <div className="MessageItem__content">
        <span>{`${userItem.firstName} ${userItem.lastName}`}</span>
        <span>@{userItem.username}</span>
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
