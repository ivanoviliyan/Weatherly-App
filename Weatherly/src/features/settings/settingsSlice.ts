import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
   metric: 'C' | 'F';
}

const initialState = { metric: 'C' } satisfies SettingsState as SettingsState;

const settingsState = createSlice({
   name: 'settings',
   initialState,
   reducers: {
      change(state) {
         if (state.metric === 'C') {
            state.metric = 'F';
         } else {
            state.metric = 'C';
         }
      },
   },
});

export const {change} = settingsState.actions;
export default settingsState.reducer;