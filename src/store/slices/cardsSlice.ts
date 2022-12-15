import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCards } from 'api';

import { CardsState } from 'models/cardsSlice';

const initialState: CardsState = {
  cards: [],
  info: null,
  error: null,
  status: 'Pending',
  currentPage: 1,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    sortCards: (state, action: PayloadAction<string>) => {
      if (action.payload === 'by-ID') {
        state.cards = [...state.cards].sort((a, b) => a.id - b.id);
      }
      if (action.payload === 'by-Alphabet') {
        state.cards = [...state.cards].sort((a, b) => a.name.localeCompare(b.name));
      }
    },

    setPage: (state, action: PayloadAction<number>) => {
      console.log(action);
      state.currentPage = action.payload;
    },

    nextPage: (state) => {
      state.currentPage += 1;
    },

    prevPage: (state) => {
      state.currentPage = state.currentPage < 2 ? 1 : state.currentPage - 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllCards.pending, (state) => {
        state.status = 'Pending';
        state.cards = [];
        state.info = null;
        state.error = null;
      })

      .addCase(getAllCards.fulfilled, (state, action) => {
        state.cards = action.payload.results;
        state.info = action.payload.info;
        state.status = 'Fulfilled';
      })

      .addCase(getAllCards.rejected, (state, action) => {
        if (action.payload) state.error = action.payload.message;
        state.status = 'Rejected';
      });
  },
});

export const { sortCards, prevPage, setPage, nextPage } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
