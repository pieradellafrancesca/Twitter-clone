import { useRef, useState } from "react";
import Header from "../header";
import MessageList from "../messageList";
import Footer from "../footer";
import "./index.css";

// Hook useRef per accedere al DOM node div.Content
// e alla proprietà scrollTop, per fare in modo che per una distanza dal top
// maggiore di 10px la parte superiore dell'Header sparisca

const Content = ({ setPostId, setModalUpdate }) => {
  const messageListTrendRef = useRef(null);

  const [showHeaderUp, setShowHeaderUp] = useState(true);

  const scrollPage = () => {
    // console.log(messageListTrendRef.current.scrollTop);
    messageListTrendRef.current.scrollTop > 10
      ? setShowHeaderUp(false)
      : setShowHeaderUp(true);
  };
  return (
    <div ref={messageListTrendRef} className="Content" onScroll={scrollPage}>
      <Header showHeaderUp={showHeaderUp} />
      <MessageList setPostId={setPostId} setModalUpdate={setModalUpdate} />
      <Footer />
    </div>
  );
};

export default Content;
