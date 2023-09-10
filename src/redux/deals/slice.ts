import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDealsItem } from '../../utils/dealsItemFromLS';
import { DealsItem, DealsSliceState } from './types';

const initialState: DealsSliceState = getDealsItem();

export const dealsSlice = createSlice({
  name: 'deals',
  initialState,
  reducers: {
    addDeals: (state, action: PayloadAction<DealsItem>) => {
      state.items.push(action.payload);
    },
    removeDeals: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addDeals, removeDeals } = dealsSlice.actions;

export default dealsSlice.reducer;
