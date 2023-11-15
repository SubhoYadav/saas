import { create } from "zustand";

const useUserDataStore = create((set, get) => ({
  userData: { userRole: "ROLE_DEVELOPER", userIsLoggedIn: false },
  setUserData: (user_data) =>
    set((state) => {
      state.userData = user_data;
    }),
}));

export default useUserDataStore;
