import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface MenuState {
  data: object;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MenuState = {
  data:{},
  status: 'idle',
};

export const getCategories = createAsyncThunk(
  'menu/fetchMenu',
  async () => {
    const response = await fetch('https://api.thecatapi.com/v1/categories')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
  }
);

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectMenu = (state: RootState) => state.menu.data;

export const getMenu = (): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectMenu(getState());
  if (currentValue) {
    dispatch(getCategories());
  }
};

export default menuSlice.reducer;
