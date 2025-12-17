import { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../weather/weatherSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherResult from '../../components/WeatherResult';
import WeatherCard from '../../components/WeatherCard';
import type { WeatherData } from '../weather/weatherTypes';

const DashboardPage = () => {
   const [city, setCity] = useState<string>('');
   const [favorites, setFavorites] = useState<WeatherData[]>([]);
   const dispatch = useAppDispatch();
   const { data, loading, error } = useAppSelector((state) => state.weather);

   useEffect(() => {
      if (favorites.length === 0) return;

      const interval = setInterval(() => {
         favorites.forEach((weather) => {
            dispatch(fetchWeatherByCity(weather.city));
         });
      }, 5 * 60 * 1000);

      return () => clearInterval(interval);
   }, [favorites, dispatch]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!city.trim() || loading) return;

      dispatch(fetchWeatherByCity(city.trim()));
   };

   const handleAddToFavorites = (e: React.FormEvent) => {
      e.preventDefault();

      if (!data) return;
      if (favorites.some((f) => f.city === data.city)) return;

      setFavorites((prev) => [...prev, data]);
   };

   return (
      <>
         <p>Dashboard</p>
         <form onSubmit={handleSubmit}>
            <input
               type='text'
               value={city}
               onChange={(e) => setCity(e.target.value)}
               placeholder='Enter city'
            />
            <button type='submit' disabled={!city.trim() || loading}>
               {loading ? 'Loading...' : 'Load Weather'}
            </button>
            <WeatherResult data={data} loading={loading} error={error} />
            {data ? (
               <button
                  onClick={handleAddToFavorites}
                  disabled={favorites.some((f) => f.city === data.city)}
               >
                  Add {data.city} to favorites
               </button>
            ) : null}
         </form>

         <div className='favorites'>
            {favorites.map((weather) => (
               <WeatherCard
                  key={weather.city}
                  city={weather.city}
                  tempC={weather.tempC}
                  tempF={weather.tempF}
               />
            ))}
         </div>
      </>
   );
};

export default DashboardPage;
