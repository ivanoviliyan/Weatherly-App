import type { WeatherData } from '../../features/weather/weatherTypes';
import styles from './WeatherCard.module.css';
import { getWeatherEmoji } from '../../utils/utils';

const WeatherCard = ({ city, tempC, tempF }: WeatherData) => {
   return (
      <div className={styles.container}>
         <p className={styles.city}> {city} 📍</p>
         <p className={styles.tempC}>
            {getWeatherEmoji(tempC)} {tempC} °C
         </p>
         <p className={styles.tempF}>
            {getWeatherEmoji(tempC)} {tempF} °F
         </p>
      </div>
   );
};

export default WeatherCard;
