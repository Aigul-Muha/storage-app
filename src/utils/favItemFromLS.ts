import { FavItem } from '../redux/favorite/types';

export const getFavItem = () => {
  const data = localStorage.getItem('favItem');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as FavItem[],
  };
};
