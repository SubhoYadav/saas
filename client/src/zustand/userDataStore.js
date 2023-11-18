import { create } from "zustand";

// Check if the data is present in the store or not
const localUserData = localStorage.getItem("userData");
let userData = null;
if (localUserData) {
  userData = JSON.parse(localUserData);
} else {
  userData = {
    userRole: "",
    userIsLoggedIn: false,
    userName: "",
    userEmail: "",
    userProfileImg: "",
    userId: "",
  };
}
const useUserDataStore = create((set, get) => ({
  userData: userData,
  setUserData: (user_data) =>
    set((state) => {
      // saving data into local storage
      localStorage.setItem("userData", JSON.stringify(user_data));
      return { ...state, userData: user_data };
    }),
}));

export default useUserDataStore;
