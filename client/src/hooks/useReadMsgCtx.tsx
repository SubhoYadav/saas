import { useContext } from "react";
import MessageContext from "../context/message-context";

const useReadMsgCtx = () => {
  const msgCtx = useContext(MessageContext);
  return msgCtx;
};

export default useReadMsgCtx;
