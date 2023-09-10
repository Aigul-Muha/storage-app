import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { product, fetchFroductsType } from './types';

export const fetchProducts = createAsyncThunk(
  'products/fetchProductsStatus',
  async (params: fetchFroductsType) => {
    const { categoryProp, searchProp } = params;
    const { data } = await axios.get<product[]>(
      `https://64f2fc79edfa0459f6c62fa2.mockapi.io/items?${categoryProp}${searchProp}`,
    );

    return data as product[];
  },
);
