import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterSliceState } from './types';

const initialState: filterSliceState = {
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;

export default filterSlice.reducer;
