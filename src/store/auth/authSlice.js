import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  uid: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_UID(state, action) {
      state.uid = action.payload;
    },
  },
});

export const { SET_LOGIN, SET_UID } = authSlice.actions;

export default authSlice.reducer;
