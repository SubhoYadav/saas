import React from "react";
import useUserDataStore from "../../zustand/userDataStore";
import "./navbar.scss";
import UserDropDown from "../userDropdown/UserDropDown";

export default function Navbar() {
  const userRole = useUserDataStore(({ userData }) => {
    return userData.userRole;
  });
  const [showUserDropdown, setShowUserDropdown] = React.useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/logo.svg" alt="" />
          <span>SAAS</span>
        </div>
        <div className="icons">
          <img src="/app.svg" alt="" />
          <img src="/expand.svg" alt="" />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>5</span>
          </div>
          <div
            className="user"
            onClick={() => setShowUserDropdown(!showUserDropdown)}
          >
            <img src="avatar.png" alt="" />
            <div>
              <p>Subho</p>
              <small
                style={{ display: "block", marginTop: "3px", fontSize: "12px" }}
              >
                {userRole.split("_")[1]}
              </small>
            </div>
          </div>
          <img src="/setting.svg" alt="" />
        </div>
        {showUserDropdown && <UserDropDown></UserDropDown>}
      </div>
    </>
  );
}
