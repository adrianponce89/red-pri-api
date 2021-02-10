import { createSlice } from '@reduxjs/toolkit';
import authService from '../../services/authservice';
import { hideModal } from './modalSlice';

let profile = null;
if (process.browser) {
  profile = JSON.parse(sessionStorage.getItem('profile'));
}

const initialState = profile ? { loggedIn: true, profile } : {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loggingIn = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loggingIn = false;
      state.loggedIn = true;
      state.profile = action.payload;
    },
    loginFailure: (state, action) => {
      state.loggingIn = false;
      state.error = action.payload;
    },
    logoutRequest: (state, action) => {
      state.profile = null;
    },
    registerRequest: (state, action) => {
      state.signingIn = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.signingIn = false;
      state.loggedIn = true;
      state.profile = action.payload;
    },
    registerFailure: (state, action) => {
      state.signingIn = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export function login(email, password, from) {
  return (dispatch) => {
    dispatch(loginRequest({ email }));

    authService.login(email, password).then(
      (profile) => {
        dispatch(loginSuccess(profile));
        dispatch(hideModal());
      },
      (error) => {
        dispatch(loginFailure(error.toString()));
      },
    );
  };
}

export function logout() {
  authService.logout();
  return logoutRequest();
}

export function register(email, password, from) {
  return (dispatch) => {
    dispatch(registerRequest({ email }));

    authService.register(email, password).then(
      (profile) => {
        dispatch(registerSuccess(profile));
        dispatch(hideModal());
      },
      (error) => {
        dispatch(registerFailure(error.toString()));
      },
    );
  };
}

export default authSlice.reducer;
