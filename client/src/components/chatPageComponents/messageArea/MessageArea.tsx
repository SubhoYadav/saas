import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./messageArea.scss";
import useReadTogglectx from "../../../hooks/useReadTogglectx";
import socket from "../../../socket";

export default function MessageArea() {
  const [imgs, setImgs] = React.useState([
    "/avatar.png",
    "/avatar4.png",
    "/avatar2.png",
    "/avatar3.png",
  ]);

  // Use effect to handle listener
  let recieveEvent = "recieve";
  let sendEvent = "send";

  socket.on(recieveEvent, (message) => {
    setMsgs([...msgs, { msg: message, type: "theirs" }]);
  });

  /**
   * handleAddMessages
   */
  const handleAddMessages = () => {
    // setMsgs([...msgs, { msg: "Hiiii", type: "self" }]);
    socket.emit(sendEvent, "Software Engineer");
  };
  // static data to test messages
  let [msgs, setMsgs] = React.useState([
    {
      msg: "Hey There I am a ui designer !",
      type: "theirs",
    },
    {
      msg: "Hey There I am a Software Engineer !",
      type: "self",
    },
  ]);
  // static data to test messages
  const togglectx = useReadTogglectx();
  return (
    <div className="message-area-container">
      <div className="top-bar">
        <div className="avatars">
          {imgs.map((img, index) => {
            return (
              <img
                src={img}
                alt=""
                style={{ marginLeft: "-10px" }}
                key={index}
              />
            );
          })}
        </div>
        <h3>Subho Yadav</h3>
        <i
          onClick={() => {
            togglectx.setShowChatProfile(!togglectx.showChatProfile);
          }}
        >
          {togglectx.showChatProfile ? (
            <FaArrowLeft size={20} />
          ) : (
            <FaArrowRight size={20} />
          )}
        </i>
      </div>
      <div className="main-area">
        <div className="chat-messages">
          {/* creating a container inside chat-messages in order to put it at the end of the flex container- "chat-messages" */}
          <div className="inner-container">
            {msgs.map((e, index) => {
              return (
                <div
                  className="single-msg"
                  key={index}
                  // style={e.type == "self" ? { float: "right" } : {}}
                >
                  <div className="avatars">
                    <img
                      src={e.type == "self" ? "/avatar.png" : "/avatar2.png"}
                      alt=""
                      style={{ marginLeft: "-10px" }}
                    />
                  </div>
                  <div className="msg">{e.msg}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* do not touch this div */}
        <div className="reply-box-container">
          <div className="reply-box">
            <input type="text" placeholder="Write a reply..." />
            <div className="reply-actions">
              <div className="attach">
                <img src="/log.svg" alt="" />
                <img src="/chart.svg" alt="" />
              </div>
              <img src="/form.svg" alt="" onClick={handleAddMessages} />
            </div>
          </div>
        </div>
        {/* do not touch this div */}
      </div>
    </div>
  );
}
