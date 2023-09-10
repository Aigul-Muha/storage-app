import { DealsItem } from '../redux/deals/types';

export const getDealsItem = () => {
  const data = localStorage.getItem('dealsItem');
  const items = data ? JSON.parse(data) : [];

  return {
    items: items as DealsItem[],
  };
};
