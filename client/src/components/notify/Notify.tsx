import React from "react";
import "./notify.scss";

import notifyTypesObjList from "../../data/Notify_Types";

import useReadToggleCtx from "../../hooks/useReadTogglectx";
import useReadMsgCtx from "../../hooks/useReadMsgCtx";

export default function Notify() {
  const msgTitleStyles = {};
  const msgContainerStyles = {};

  // Reading the context and adding the toggle state
  const toggleCtx = useReadToggleCtx();
  const msgCtx = useReadMsgCtx();
  // React.useEffect(() => {
  //   console.log("Notification component rendered");
  // });
  setTimeout(() => {
    toggleCtx.setShowNotification(false);
  }, 5000);
  // console.log("Message context in notify ", msgCtx);

  // console.log("Notify Component ", toggleCtx);

  // Determinig the type of notification
  const notifyTypeObj = notifyTypesObjList.find(
    (e) => e.type == msgCtx.notificationObj.type
  );
  msgTitleStyles.color = notifyTypeObj.theme;
  msgContainerStyles["borderLeft"] = `10px solid ${notifyTypeObj.theme}`;

  console.log({ msgTitleStyles, msgContainerStyles });
  if (toggleCtx.showNotification)
    return (
      <div className="notify-container" style={msgContainerStyles}>
        <i className="icon">
          <img src={notifyTypeObj.icon} alt="" />
        </i>
        <div className="message">
          <p className="msg-title" style={msgTitleStyles}>
            {notifyTypeObj.type[0] +
              notifyTypeObj.type.substring(1).toLocaleLowerCase()}
          </p>
          <p className="msg-desc">
            {msgCtx.notificationObj.message || "You won prize money of 5cr."}
          </p>
        </div>
      </div>
    );
}
