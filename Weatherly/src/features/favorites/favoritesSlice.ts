import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type {WeatherData} from '../weather/weatherTypes';
 
interface FavoritesSlice {
   cities: WeatherData[];
}

const initialState: FavoritesSlice = {
   cities: [],
};

const favoritesState = createSlice({
   name: 'favorites',
   initialState,
   reducers: {
      addCity: (state, action: PayloadAction<WeatherData>) => {
         state.cities.push(action.payload);
      },
      removeCity: (state, action: PayloadAction<WeatherData>) => {
         state.cities = state.cities.filter((city) => city !== action.payload);
      },
   },
});

export const { addCity, removeCity } = favoritesState.actions;
export default favoritesState.reducer;
