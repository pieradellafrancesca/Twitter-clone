import { useState } from "react";
import "./index.css";

const UpdateMessage = ({ postId, setModalUpdate }) => {
  const [messageInput, setMessageInput] = useState("");

  const onHandleChange = (event) => {
    setMessageInput(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://dummyjson.com/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body: messageInput,
      }),
    }).then(() => setModalUpdate(false));
  };

  const onHandleClick = () => {
    setModalUpdate(false);
  };

  return (
    <div className="UpdateMessage">
      <div className="UpdateMessage__overlay" onClick={onHandleClick}></div>
      <div className="UpdateMessage__content">
        <h3>Update your post</h3>
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Update message"
            className="UpdateMessage__content--input"
            value={messageInput}
            onChange={onHandleChange}
            required
          />
          <input
            type="submit"
            value="Submit"
            className="UpdateMessage__content--submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMessage;
