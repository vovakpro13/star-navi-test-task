import { configureStore } from '@reduxjs/toolkit';

import { modesSlice } from './modesSlice';
import { cellsSlice } from './cellsSlice';

export const store = configureStore({
  reducer: {
    modesSlice: modesSlice.reducer,
    cellsSlice: cellsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
