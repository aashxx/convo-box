import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const Chats = (props) => {

  const chatProps = useMultiChatLogic(
    "b5eab7e4-bbdc-40a6-9880-065c589e9ad4",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
  );
};

export default Chats;