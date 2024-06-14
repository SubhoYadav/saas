import React from "react";
import ReactCrop from "react-image-crop";
import "./userDropDown.scss";
import useUserDataStore from "../../zustand/userDataStore";
export default function UserDropDown() {
  const [crop, setCrop] = React.useState();
  const userData = useUserDataStore(({ userData, setUserData }) => {
    return {
      userData,
      setUserData,
    };
  });
  function handleLogout() {
    const logoutUserData = {
      userRole: "",
      userIsLoggedIn: false,
      userName: "",
      userEmail: "",
      userProfileImg: "",
      userId: "",
    };
    userData.setUserData(logoutUserData);
  }
  return (
    <div className="user-dropdown-container">
      <div className="user">
        <img src={userData.userData.userProfileImg} alt="" />
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
      <span>{userData.userData.userName}</span>
      <small>{userData.userData.userRole.split("_")[1]}</small>
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
