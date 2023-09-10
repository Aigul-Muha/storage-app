import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavSliceState, FavItem } from './types';
import { getFavItem } from '../../utils/favItemFromLS';

const initialState: FavSliceState = getFavItem();

export const favSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<FavItem>) => {
      state.items.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addFav, removeFav } = favSlice.actions;

export default favSlice.reducer;
