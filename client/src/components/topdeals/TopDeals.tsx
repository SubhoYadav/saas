import React from "react";
import "./topdeals.scss";
import Users from "../../data/Users.json";
export default function TopDeals() {
  return (
    <>
      <h1>Recent Users</h1>
      <div className="topdeals">
        <div className="list">
          {Users.map((user, index) => {
            return (
              <div className="listItem" key={index}>
                <div className="user">
                  <img src={`/${user.avatar}`} alt="avatar" />
                  <div className="details">
                    <span className="username">{user.userName}</span>
                    <span className="email">{user.userEmail}</span>
                  </div>
                </div>
                <span className="amt">{user.lastLoggedIn}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
