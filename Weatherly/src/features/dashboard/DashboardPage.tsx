import { useEffect, useState } from 'react';
import { fetchWeatherByCity } from '../weather/weatherSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherResult from '../../components/WeatherResult/WeatherResult';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
   const [cityValue, setCityValue] = useState<string>('');
   const dispatch = useAppDispatch();
   const { data, loading, error } = useAppSelector((state) => state.weather);
   const cities = useAppSelector((state) => state.favorites.cities);

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

   return (
      <>
         <div className='page'>
            <Navigation />
            <form onSubmit={handleSubmit} className={styles.form}>
               <p className={styles.header}>Dashboard</p>
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
               <>
                  <section className={styles.weatherResult}>
                     <WeatherResult
                        data={data}
                        loading={loading}
                        error={error}
                     />
                  </section>
                  {cities.length ? (
                     <h2>
                        <FontAwesomeIcon icon={faStar} /> Favorites
                     </h2>
                  ) : null}
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
               </>
            )}

            <Footer />
         </div>
      </>
   );
};

export default DashboardPage;
