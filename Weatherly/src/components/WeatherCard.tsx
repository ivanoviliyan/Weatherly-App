import type { WeatherData } from '../features/weather/weatherTypes';

const WeatherCard = ({ city, tempC, tempF }: WeatherData) => {
   return (
      <div>
         <p>{city}</p>
         <p>{tempC} °C</p>
         <p>{tempF} °F</p>
      </div>
   );
};

export default WeatherCard;
