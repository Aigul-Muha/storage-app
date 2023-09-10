export type DealsItem = {
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

export interface DealsSliceState {
  items: DealsItem[];
}
