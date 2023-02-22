import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_FETCHED_MODES_ERROR } from '../../constants/errors';
import { IMode, InitialState } from './types';
import modesAPI from '../../api/modes';
import { RootState } from '../store';

export const fetchAllModes = createAsyncThunk<IMode[], void>(
  'fetch/all',
  async () => {
    const { data: modes } = await modesAPI.getAll();
    return modes;
  }
);

const initialState: InitialState = {
  currentMode: null,
  modes: [],
  isLoading: true,
  error: null,
};

export const modesSlice = createSlice({
  name: 'modesSlice',
  initialState,
  reducers: {
    setCurrentMode: (state, { payload }: PayloadAction<IMode>) => {
      state.currentMode = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllModes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(fetchAllModes.fulfilled, (state, action) => {
      state.modes = action.payload;
      state.isLoading = false;
      state.error = null;
    });

    builder.addCase(fetchAllModes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || DEFAULT_FETCHED_MODES_ERROR;
    });
  },
});

export const selectCurrentMode = (state: RootState) =>
  state.modesSlice.currentMode;
export const selectModes = (state: RootState) => state.modesSlice.modes;
export const selectError = (state: RootState) => state.modesSlice.error;
export const selectIsModesLoading = (state: RootState) =>
  state.modesSlice.isLoading;

export const { setCurrentMode } = modesSlice.actions;
