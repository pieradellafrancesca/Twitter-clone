import "./index.css";
import Header from "../header";
import MessageList from "../messageList";
import Footer from "../footer";

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <MessageList />
      <Footer />
    </div>
  );
};

export default Content;
