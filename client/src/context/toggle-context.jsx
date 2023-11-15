import React from "react";

const ToggleContext = React.createContext({
  showChatProfile: false,
  setShowChatProfile: () => {},
  showNotification: false,
  setShowNotification: () => {},
});

export const ToggleContextProvider = ({ children }) => {
  const [showChatProfile, setShowChatProfile] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(true);
  return (
    <ToggleContext.Provider
      value={{
        showChatProfile,
        setShowChatProfile,
        showNotification,
        setShowNotification,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
// Exporting ToggleContext for reading the context .
