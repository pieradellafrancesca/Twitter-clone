import { useState, useEffect } from "react";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = ({ setPostId, setModalUpdate }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostList(data.posts));
  }, []);

  return (
    <div className="MessageList">
      {postList.map((message) => (
        <MessageItem
          messageData={message}
          key={message.id}
          setPostId={setPostId}
          setModalUpdate={setModalUpdate}
        />
      ))}
    </div>
  );
};

export default MessageList;
