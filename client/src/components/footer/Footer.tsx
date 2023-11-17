import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <span>
        SAAS <small></small>
      </span>
      <span>
        <a href="">credits</a>
        SAAS {import.meta.env.VITE_APP_VERSION_NO} &copy;
        {new Date().getFullYear()}
      </span>
    </div>
  );
}
