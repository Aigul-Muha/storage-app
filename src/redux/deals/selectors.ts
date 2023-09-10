import { RootState } from '../store';

export const selectDeals = (state: RootState) => state.deals;

export const selectDealsItem = (id: string) => (state: RootState) =>
  state.deals.items.find((obj) => obj.id === id);
