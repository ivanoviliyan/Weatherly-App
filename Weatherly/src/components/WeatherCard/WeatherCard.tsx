import type { WeatherData } from '../../features/weather/weatherTypes';
import styles from './WeatherCard.module.css';
import { WeatherEmoji } from '../../features/weather/weatherTypes';

const getWeatherEmoji = (tempC: number): string => {
   if (tempC >= 20) return WeatherEmoji.Sunny;
   if (tempC <= 0) return WeatherEmoji.Snow;
   return WeatherEmoji.PartlyCloudy;
};

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
