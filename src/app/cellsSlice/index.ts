import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { IGridCell, InitialState } from './types';

const initialState: InitialState = {
  cells: [],
};

export const cellsSlice = createSlice({
  name: 'cellsSlice',
  initialState,
  reducers: {
    pushCell: (state, { payload: cell }: PayloadAction<IGridCell>) => {
      state.cells.push(cell);
    },
    removeCell: (state, { payload: cellId }: PayloadAction<string>) => {
      state.cells = state.cells.filter(({ id }) => id !== cellId);
    },
    resetGrid: () => initialState,
  },
});

export const selectActiveCells = (state: RootState) => state.cellsSlice.cells;

export const { pushCell, removeCell, resetGrid } = cellsSlice.actions;
