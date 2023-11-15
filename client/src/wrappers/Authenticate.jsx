import React, { useState } from "react";

import Login from "../pages/login/Login";
import useUserDataStore from "../zustand/userDataStore";

export default function Authenticate({ children }) {
  // @subho todo:- Read the logged in state from the zustand store
  const userStoreData = useUserDataStore(({ userData, setUserData }) => {
    return {
      userData,
      setUserData,
    };
  });
  console.log("UserData in the component ", userStoreData);
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return userStoreData.userData.userIsLoggedIn ? children : <Login />;
}
