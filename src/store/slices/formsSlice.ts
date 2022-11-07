import { createSlice } from '@reduxjs/toolkit';
import { ICard } from 'models/cards';

const initialState: { forms: ICard[] } = {
  forms: [],
};

const formsSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.forms = state.forms.concat(action.payload);
    },
  },
});

export const { addForm } = formsSlice.actions;
export const formsReducer = formsSlice.reducer;
