import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchCardsError, TData, TProps } from 'models/cardsSlice';

export const getAllCards = createAsyncThunk<TData, TProps, { rejectValue: FetchCardsError }>(
  '/cards/fetch',
  async (p: TProps, thunkApi) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${p.pageNumber}&name=${p.searchValue}`
      );
      const data: TData = await response.json();

      if (!response.ok) {
        return thunkApi.rejectWithValue({
          message: 'No exact matches found.',
        });
      }
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch cards.',
      });
    }
  }
);
