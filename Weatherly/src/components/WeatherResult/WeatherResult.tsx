import type {
   WeatherData,
   WeatherResultProps,
} from '../../features/weather/weatherTypes';
import styles from './WeatherResult.module.css';
import { WeatherEmoji } from '../../features/weather/weatherTypes';
import { addCity } from '../../features/favorites/favoritesSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';

const WeatherResult = ({ data, loading, error }: WeatherResultProps) => {
   const cities = useAppSelector((state) => state.favorites.cities);
   const dispatch = useAppDispatch();

   const weatherEmoji = (data: WeatherData | null): string => {
      if (!data) return '';

      const temp = data.tempC;

      if (temp >= 20) return WeatherEmoji.Sunny;
      if (temp <= 0) return WeatherEmoji.Snow;

      return WeatherEmoji.PartlyCloudy;
   };

   const isCityAlreadyAdded = () => {
      if (!data) return false;
      return cities.some((item) => item.city === data.city);
   };

   const handleAddToFavorites = (e: React.FormEvent) => {
      e.preventDefault();
      if (!data || isCityAlreadyAdded()) return;
      dispatch(addCity(data));
   };

   return (
      <div className={styles.weatherCard}>
         {loading && <p>Loading...</p>}

         {data ? (
            <>
               <p>
                  <FontAwesomeIcon icon={faMapLocation} /> {data.city}
               </p>
               <p>
                  {weatherEmoji(data)} {data.tempC} °C
               </p>
               <button
                  onClick={handleAddToFavorites}
                  disabled={isCityAlreadyAdded()}
               >
                  Add {data.city} to favorites
               </button>
            </>
         ) : (
            !loading && <p>{error}</p>
         )}
      </div>
   );
};

export default WeatherResult;
