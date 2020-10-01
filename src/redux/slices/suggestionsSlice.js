import { createSlice } from '@reduxjs/toolkit';
import suggestionsService from '../../services/suggestionsService';

const suggestionsSlice = createSlice({
  name: 'suggestions',
  initialState: { loaded: false, loading: false, suggestions: [] },
  reducers: {
    getSuggestionsRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getSuggestionsSuccess: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.suggestions = action.payload;
    },
    getSuggestionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getSuggestionsRequest,
  getSuggestionsSuccess,
  getSuggestionsFailure,
} = suggestionsSlice.actions;

export function getSuggestions() {
  return (dispatch) => {
    dispatch(getSuggestionsRequest());
    suggestionsService.getSuggestions().then(
      (suggestions) => {
        dispatch(getSuggestionsSuccess(suggestions));
      },
      (error) => {
        dispatch(getSuggestionsFailure(error.toString()));
      },
    );
  };
}

export default suggestionsSlice.reducer;
