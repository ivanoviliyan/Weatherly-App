import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { WeatherState, WeatherApiResponse, WeatherData } from './weatherTypes';

const apiKey: string = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherByCity = createAsyncThunk<
   WeatherData,
   string,
   { rejectValue: string }
>('weather/fetchByCity', async (city, { rejectWithValue }) => {
   try {
      const response = await fetch(
         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );

      if (!response.ok) {
         throw new Error('Failed to fetch weather');
      }

      const data: WeatherApiResponse = await response.json();

      return {
         city: data.location.name,
         tempC: data.current.temp_c,
         tempF: data.current.temp_f,
      };
   } catch (error) {
      return rejectWithValue(
         error instanceof Error ? error.message : 'Unknown error'
      );
   }
});

const initialState: WeatherState = {
   data: null,
   loading: false,
   error: null,
};

const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      clearWeather: (state) => {
         state.data = null;
         state.loading = false;
         state.error = null;
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchWeatherByCity.pending, (state) => {
         state.loading = true;
      });
      builder.addCase(fetchWeatherByCity.fulfilled, (state, action) => {
         state.loading = false;
         state.data = action.payload;
      });
      builder.addCase(fetchWeatherByCity.rejected, (state, action) => {
         state.loading = false;
         state.error = action.payload ?? 'Failed to fetch weather';
      });
   },
});

export default weatherSlice.reducer;
