import { useState } from "react";
import SideMenu from "./components/sideMenu";
import Content from "./components/content";
import SideTrends from "./components/sideTrends";
import UpdateMessage from "./components/updateMessage";
import "./App.css";

function App() {
  const [postId, setPostId] = useState("");
  const [modalUpdate, setModalUpdate] = useState(false);

  return (
    <div className="App">
      <SideMenu />
      <Content setPostId={setPostId} setModalUpdate={setModalUpdate} />
      <SideTrends />
      {modalUpdate && (
        <UpdateMessage postId={postId} setModalUpdate={setModalUpdate} />
      )}
    </div>
  );
}

export default App;
