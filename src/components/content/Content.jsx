import { useRef } from "react";
import Header from "../header";
import MessageList from "../messageList";
import Footer from "../footer";
import "./index.css";

// Esercizio del 09-03-2023
// ho utilizzato l'hook useRef per accedere al DOM node div.Content
// e alla proprietà scrollTop, per fare in modo che per una distanza dal top
// maggiore di 100px il colore diventasse blu e per distanze minori rosso

// Per l'AVANZATo ho fatto il filtro ricerca nel componenete TrendList

const Content = () => {
  const messageListTrendRef = useRef(null);

  const scrollPage = () => {
    // console.log(messageListTrendRef.current);
    messageListTrendRef.current.scrollTop > 100
      ? (messageListTrendRef.current.style.color = "blue")
      : (messageListTrendRef.current.style.color = "red");
  };
  return (
    <div
      ref={messageListTrendRef}
      className="Content"
      onScroll={() => scrollPage()}
    >
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
};

export default Content;
