import "./index.css";
import messageList from "../../mocks/messageList";
import MessageItem from "../messageItem";

const MessageList = () => {
  console.log(messageList);
  return (
    <div className="MessageList">
      {messageList.map((message, index) => (
        <MessageItem messageData={message} key={index} />
      ))}
    </div>
  );
};

export default MessageList;
