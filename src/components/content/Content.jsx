import { useRef, useState } from "react";
import Header from "../header";
import MessageList from "../messageList";
import Footer from "../footer";
import "./index.css";

// Esercizio del 09-03-2023
// ho utilizzato l'hook useRef per accedere al DOM node div.Content
// e alla proprietà scrollTop, per fare in modo che per una distanza dal top
// maggiore di 10px la parte superiore dell'Header sparisca

// Per l'AVANZATo ho fatto il filtro ricerca nel componenete TrendList

const Content = () => {
  const messageListTrendRef = useRef(null);

  const [showHeaderUp, setShowHeaderUp] = useState(true);

  const scrollPage = () => {
    console.log(messageListTrendRef.current.scrollTop);
    messageListTrendRef.current.scrollTop > 10
      ? setShowHeaderUp(false)
      : setShowHeaderUp(true);

    // ? (messageListTrendRef.current.style.color = "blue")
    // : (messageListTrendRef.current.style.color = "red");
  };
  return (
    <div ref={messageListTrendRef} className="Content" onScroll={scrollPage}>
      <Header showHeaderUp={showHeaderUp} />
      <MessageList />
      <Footer />
    </div>
  );
};

export default Content;
