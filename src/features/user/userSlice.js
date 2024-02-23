import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeoCoding";

function getPosition() {
  return new Promise((resolve, reject) => {
    // Constructor passes `resolve` and `reject` to it as callbacks
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) Get user's geolocation
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Use reverse geocoding API to get address
    // https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api
    const addressObj = await getAddress(position);
    const address = `${addressObj.locality}, ${addressObj.city}, ${addressObj.countryCode}`;
    // Serve as action payload for thunk
    return { address, position };
  },
);

const initialState = {
  userName: JSON.parse(localStorage.getItem("userName")) || "",
  status: "idle",
  // {latitude, longitude}
  position: {},
  address: "",
  error: "",
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
    logout(state) {
      console.log("logout");
      state.userName = "";
      localStorage.removeItem("userName");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status === "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "error";
      });
  },
});

export const { updateName, logout } = userSlice.actions;

export default userSlice.reducer;
