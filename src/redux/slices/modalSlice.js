import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    show: false,
    step: '',
    email: '',
    content: '',
  },
  reducers: {
    showModal: (state, action) => {
      state.step = action.payload.step;
      state.email = action.payload.email;
      state.content = action.payload.content;
      state.show = true;
    },
    hideModal: (state) => {
      state.show = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
