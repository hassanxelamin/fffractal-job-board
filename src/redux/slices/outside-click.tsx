/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: true,
};

export const closeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTrue, setFalse } = closeSlice.actions;

export default closeSlice.reducer;
