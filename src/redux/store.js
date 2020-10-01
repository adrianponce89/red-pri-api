import { configureStore } from '@reduxjs/toolkit';

import authReducer from './slices/authSlice';
import modalReducer from './slices/modalSlice';
import suggestionsReducer from './slices/suggestionsSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    suggestions: suggestionsReducer,
  },
  devTools: true,
});
