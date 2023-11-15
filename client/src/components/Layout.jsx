import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.tsx";
import Menu from "./menu/Menu.jsx";

import { useLocation } from "react-router-dom";
import Notify from "./notify/Notify";
import notificationTypeConfig from "../cofigs/notificationTypes";

export default function Layout() {
  const location = useLocation();
  console.log("Location ", location.key);
  return (
    <div className="layout">
      <Notify />
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

/**
 * https://ui.dev/react-router-v5-animated-transitions
 *
 * For example, if you provide a classNames of fade, then the following classes will be added to the component during its animation lifecycle - fade-enter, fade-enter-active, fade-exit, fade-exit-active, fade-appear, and fade-appear-active.
 */
