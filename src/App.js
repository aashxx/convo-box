import { useState } from "react";

import "./index.css";

import Auth from "./components/Auth";
import Chats from "./components/Chats";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <Auth onAuth={(user) => setUser(user)} />;
  } else {
    return <Chats user={user} />;
  }
}

export default App;