import "./menu.scss";
import React from "react";
import { Link } from "react-router-dom";
import MenuList from "../../data/Menu.json";
import userRoles from "../../cofigs/userRoles";

// zustand store
import useUserDataStore from "../../zustand/userDataStore";

export default function Menu() {
  console.log({ MenuList });

  const userRole = useUserDataStore(({ userData }) => {
    return userData.userRole;
  });
  console.log("YYY ", userRole);
  if (true)
    return (
      <div className="menu">
        {MenuList.map((item, i) => {
          if (
            !item.excluded_roles.split(",").includes(userRole) &&
            item.excluded_roles != userRoles.ALL
          )
            return (
              <div className="item" key={i}>
                <span className="title">{item.title}</span>
                {item.items.map((link, j) => {
                  if (
                    !link.excluded_roles.split(",").includes(userRole) &&
                    link.excluded_roles != userRoles.ALL
                  )
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
