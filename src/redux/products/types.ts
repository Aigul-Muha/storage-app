export type fetchFroductsType = Record<string, string>;

export type product = {
  id: string;
  img: string;
  type: string;
  title: string;
  location: string;
  seller: string;
  productType: number;
  description: string;
  price: number;
  quantity: number;
  sum: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface productsSliceState {
  items: product[];
  status: Status;
}
