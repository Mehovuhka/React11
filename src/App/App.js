import "./App.css";
import AsideBar from "../components/AsideBar";
import ChatsMenu from "../components/chats";
import Chat from "../components/Chat";

export function App() {
  return (
    <div className="App">
      <AsideBar />
      <ChatsMenu></ChatsMenu>
      <Chat></Chat>
    </div>
  );
}

export default App;
