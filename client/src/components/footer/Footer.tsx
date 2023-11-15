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
        &copy;{new Date().getFullYear()} SAAS
      </span>
    </div>
  );
}
