import { RootState } from '../store';

export const selectFav = (state: RootState) => state.fav;

export const selectFavItem = (id: string) => (state: RootState) =>
  state.fav.items.find((obj) => obj.id === id);
