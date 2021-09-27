import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carouselReducer from '../features/carousel/CarouselSlice';
import menuReducer from '../features/menu/MenuSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    carousel: carouselReducer,
    menu: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
