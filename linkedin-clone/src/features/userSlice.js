import { createSlice } from '@reduxjs/toolkit';

// we are gonna store the information of user in userSlice function
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// allow us to pull from data layer whenever we want to
//Selectors : they allow us to pull information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
