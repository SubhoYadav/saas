import React from "react";
import notificationTypeConfig from "../cofigs/notificationTypes";

const MessageContext = React.createContext({
  notificationObj: { type: "", message: "" },
  setnotificationObj: () => {},
});

export const MessageContextProvider = ({ children }) => {
  const [notificationObj, setnotificationObj] = React.useState({
    type: notificationTypeConfig.NOTIFICATION_TYPE_INFO,
    message: "I won 900",
  });
  return (
    <MessageContext.Provider
      value={{
        notificationObj,
        setnotificationObj,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export default MessageContext;
