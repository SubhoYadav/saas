import React from "react";
import "./userDropDown.scss";
export default function UserDropDown() {
  function handleLogout() {
    const logoutUserData = {
      userRole: "",
      userIsLoggedIn: false,
      userName: "",
      userEmail: "",
      userProfileImg: "",
      userId: "",
    };
  }
  return (
    <div className="user-dropdown-container">
      <div className="user">
        <img src="/avatar.png" alt="" />
        <i
          onClick={() => {
            console.log("Edit img...");
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              background: "transparent",
              position: "absolute",
              top: "71px",
              left: "53%",
            }}
            src="pencil.png"
            width="25px"
          />
        </i>
      </div>
      <span>Subho</span>
      <small>{"User".split("_")[1]}</small>
      <button onClick={handleLogout}>
        <img src="/check-out.png" alt="" />
        Log out
      </button>
      {/* <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <img src="avatar.png" alt="" />
      </ReactCrop> */}
      {/* <input type="file" /> */}
    </div>
  );
}
