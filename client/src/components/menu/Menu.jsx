import "./menu.scss";
import React from "react";
import { Link } from "react-router-dom";
import MenuList from "../../data/Menu.json";

export default function Menu() {
  return (
    <div className="menu">
      {MenuList.map((item, i) => {
          return (
            <div className="item" key={i}>
              <span className="title">{item.title}</span>
              {item.items.map((link, j) => {
                  return (
                    <Link to={link.lnk || "/"} className="link" key={j}>
                      <img
                        src={link.icon}
                        alt=""
                        width={link.width ? link.width : ""}
                      />
                      <span className="linkText">{link.linkText}</span>
                    </Link>
                  );
              })}
            </div>
          );
      })}
    </div>
  );
}
