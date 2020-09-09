import { createSlice } from '@reduxjs/toolkit';

let profile = null;
if (process.browser) {
  profile = JSON.parse(localStorage.getItem('profile'));
}

const initialState = profile ? { loggedIn: true, profile } : {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
});

export default authSlice.reducer;
