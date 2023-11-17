import React from "react";
import ReactCrop from "react-image-crop";
import "./userDropDown.scss";
export default function UserDropDown() {
  const [crop, setCrop] = React.useState();
  return (
    <div className="user-dropdown-container">
      <div className="user">
        <img src="avatar3.png" alt="" />
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
      <span>Subho Yadav</span>
      {/* <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
        <img src="avatar.png" alt="" />
      </ReactCrop> */}
      <input type="file" />
    </div>
  );
}
