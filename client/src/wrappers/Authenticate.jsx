import React, { useState } from "react";

import Login from "../pages/login/Login";

export default function Authenticate({ children }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  return (
    (isUserLoggedIn) ? children : <Login />
  )
}
