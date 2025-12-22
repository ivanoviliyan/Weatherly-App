import { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../weather/weatherSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherResult from '../../components/WeatherResult/WeatherResult';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import { addCity } from '../favorites/favoritesSlice';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Dashboard.module.css';

const DashboardPage = () => {
   const [cityValue, setCityValue] = useState<string>('');
   const dispatch = useAppDispatch();
   const { data, loading, error } = useAppSelector((state) => state.weather);
   const cities = useAppSelector((state) => state.favorites.cities);
   const user = useAppSelector((state) => state.auth.user);

   useEffect(() => {
      if (cities.length === 0) return;

      const interval = setInterval(() => {
         cities.forEach((weather) => {
            dispatch(fetchWeatherByCity(weather.city));
         });
      }, 1 * 60 * 1000);

      return () => clearInterval(interval);
   }, [cities, dispatch]);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!cityValue.trim() || loading) return;

      dispatch(fetchWeatherByCity(cityValue.trim()));
   };

   const isCityAlreadyAdded = () => {
      if (!data) return false;
      return cities.some((item) => item.city === data.city);
   };

   const handleAddToFavorites = (e: React.FormEvent) => {
      e.preventDefault();

      if (!data) return;
      if (isCityAlreadyAdded()) return;

      dispatch(addCity(data));
   };

   return (
      <>
         <div className={styles.page}>
            <Navigation />
            <form onSubmit={handleSubmit} className={styles.form}>
               <p className={styles.header}>
                  {user ? `👋🏻 ${user.username}` : 'Welcome to Weatherly'}
               </p>
               <div className={styles.search}>
                  <input
                     type='text'
                     value={cityValue}
                     onChange={(e) => setCityValue(e.target.value)}
                     placeholder='Enter city'
                  />
                  <button type='submit' disabled={!cityValue.trim() || loading}>
                     {loading ? 'Loading...' : 'Load Weather'}
                  </button>
               </div>
            </form>
            {data && (
               <section className={styles.weatherResult}>
                  <WeatherResult data={data} loading={loading} error={error} />
                  {data && (
                     <button
                        onClick={handleAddToFavorites}
                        disabled={isCityAlreadyAdded()}
                     >
                        Add {data.city} to favorites
                     </button>
                  )}
               </section>
            )}
            {cities.length ? <h1>Favorites</h1> : null}
            <section className={styles.favorites}>
               {cities.map((weather) => (
                  <WeatherCard
                     key={weather.city}
                     city={weather.city}
                     tempC={weather.tempC}
                     tempF={weather.tempF}
                  />
               ))}
            </section>
         </div>
      </>
   );
};

export default DashboardPage;
