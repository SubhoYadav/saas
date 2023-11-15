import { useEffect, useState } from "react";
import UserList from "../../components/chatPageComponents/userList/UserList";
import LoadingScreen from "../../components/loadingScreen/LoadingScreen";
import "./chats.scss";
import MessageArea from "../../components/chatPageComponents/messageArea/MessageArea";
import Notify from "../../components/notify/Notify";
import notificationTypes from "../../cofigs/notificationTypes";
import useReadToggleCtx from "../../hooks/useReadTogglectx";

export default function Chats() {
  const [chatContainerStyles, setChatContainerStyles] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const toggleCtx = useReadToggleCtx();

  useEffect(() => {
    // setTimeout(()=> {
    //   setIsLoading(false)
    // }, 5000)
  }, []);
  useEffect(() => {
    if (toggleCtx.showChatProfile) {
      setChatContainerStyles({ gridTemplateColumns: "1fr 4fr" });
    } else {
      setChatContainerStyles({});
    }
  }, [toggleCtx.showChatProfile]);
  console.log({ toggleCtx });
  return !isLoading ? (
    <div className="ccontainer" style={chatContainerStyles}>
      {/* <Notify notifyType = {notificationTypes.NOTIFICATION_TYPE_INFO} message = {"I am a chat component"}></Notify> */}
      <div className="boxc">
        <UserList />
      </div>
      <div className="boxc">
        <MessageArea />
      </div>
      {toggleCtx.showChatProfile && <div className="boxc"></div>}
    </div>
  ) : (
    <LoadingScreen />
  );
}

// UI:  https://www.uplabs.com/posts/chat-ui-design-0b930711-4cfd-4ab4-b686-6e7785624b16?rel=muzli
// UI: https://dribbble.com/shots/3257063/attachments/3257063-Messages?mode=media
