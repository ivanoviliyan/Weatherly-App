import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesSlice {
   cities: string[];
}

const initialState = {
   cities: [],
} satisfies FavoritesSlice as FavoritesSlice;

const authState = createSlice({
   name: 'favorites',
   initialState,
   reducers: {
      addCity(state, action: PayloadAction<string>) {
         state.cities.push(action.payload);
      },
      removeCity(state, action: PayloadAction<string>) {
         state.cities = state.cities.filter((city) => city !== action.payload);
      },
   },
});

export const { addCity, removeCity } = authState.actions;
export default authState.reducer;
