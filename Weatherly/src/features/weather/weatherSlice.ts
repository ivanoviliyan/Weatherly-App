import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
   data: {
      city?: string;
      tempInCelsius?: number;
      tempInFahrenheit?: number;
   };
   loading: boolean;
   error: null;
}

const initialState = {
   data: {
      city: '',
      tempInCelsius: 0,
      tempInFahrenheit: 0,
   },

   loading: false,
   error: null,
} satisfies WeatherState as WeatherState;

const settingsState = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      fetchStart(state) {},
      fetchSuccess(state) {},
      fetchError(state) {},
      clearWeather(state) {},
   },
});

export const { change } = settingsState.actions;
export default settingsState.reducer;
