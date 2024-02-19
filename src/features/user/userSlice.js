import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: JSON.parse(localStorage.getItem("userName")) || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
      // Save userName to localStorage
      localStorage.setItem("userName", JSON.stringify(action.payload));
    },
    logout(state, action) {
      console.log("logout");
      state.userName = "";
      localStorage.removeItem("userName");
    },
  },
});

export const { updateName, logout } = userSlice.actions;

export default userSlice.reducer;
