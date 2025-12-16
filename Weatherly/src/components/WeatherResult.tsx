import type { WeatherData } from '../features/weather/weatherTypes';

interface WeatherResultProps {
    data: WeatherData | null,
    loading: boolean,
    error: string | null,
}

const WeatherResult = ({ data, loading, error }: WeatherResultProps) => {
   return (
      <div>
         {loading && <p>Loading...</p>}
         {error && <p>{error}</p>}

         {data && (
            <>
               <p>City: {data.city}</p>
               <p>Temp (Celsius): {data.tempC} °C</p>
               <p>Temp (Fahrenheit): {data.tempF} °F</p>
            </>
         )}
      </div>
   );
};

export default WeatherResult;
