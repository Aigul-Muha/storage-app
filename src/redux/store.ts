import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filter from './filter/slice';
import search from './search/slice';
import fav from './favorite/slice';
import deals from './deals/slice';
import products from './products/slice';

export const store = configureStore({
  reducer: {
    filter,
    search,
    fav,
    deals,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
