import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { getWeatherEmoji } from '../../utils/utils';
import { fetchWeatherByCity } from '../weather/weatherSlice';
import homeImage from '../../assets/home.png';
import styles from './Home.module.css';
import { getFormattedDate } from '../../utils/utils';

const Home = () => {
   const weather = useAppSelector((state) => state.weather);
   const city = 'Plovdiv';
   const dispatch = useAppDispatch();
   const { today, formattedMonth } = getFormattedDate();

   useEffect(() => {
      dispatch(fetchWeatherByCity(city));

      const interval = setInterval(() => {
         dispatch(fetchWeatherByCity(city));
      }, 60_000);

      return () => clearInterval(interval);
   }, [city, dispatch]);

   return (
      <>
         <Navigation />
         <section className='page'>
            {weather.data && (
               <>
                  <div className={styles.container}>
                     <div className={styles.temp}>
                        <p className={styles.symbol}>
                           {getWeatherEmoji(weather.data.tempC)}
                        </p>
                        <p>{weather.data.tempC} °C</p>
                        <p>{weather.data.city}</p>
                     </div>
                     <img
                        className={styles.homeImage}
                        src={homeImage}
                        alt='home image'
                     />
                     <div className={styles.today}>
                        <p>Today</p>
                        <p>
                           {today} {formattedMonth}
                        </p>
                     </div>
                     <div className={styles.fiveDays}>
                        <div className={styles.day}>
                           <p className={styles.firstRow}>Monday</p>
                           <p className={styles.secRow}>
                              {getWeatherEmoji(19)}
                           </p>
                           <p>19°C</p>
                        </div>
                        <div className={styles.day}>
                           <p className={styles.firstRow}>Tuesday</p>
                           <p className={styles.secRow}>
                              {getWeatherEmoji(14)}
                           </p>
                           <p>14°C</p>
                        </div>
                        <div className={styles.day}>
                           <p className={styles.firstRow}>Wednesday</p>
                           <p className={styles.secRow}>
                              {getWeatherEmoji(22)}
                           </p>
                           <p>22°C</p>
                        </div>
                        <div className={styles.day}>
                           <p className={styles.firstRow}>Thursday</p>
                           <p className={styles.secRow}>
                              {getWeatherEmoji(-1)}
                           </p>
                           <p>-1°C</p>
                        </div>
                        <div className={styles.day}>
                           <p className={styles.firstRow}>Friday</p>
                           <p className={styles.secRow}>
                              {getWeatherEmoji(20)}
                           </p>
                           <p>20°C</p>
                        </div>
                     </div>
                  </div>
               </>
            )}
         </section>
         <Footer />
      </>
   );
};

export default Home;
