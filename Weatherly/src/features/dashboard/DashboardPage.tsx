import { useState } from 'react';
import { fetchWeatherByCity } from '../weather/weatherSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import WeatherResult from '../../components/WeatherResult';

const DashboardPage = () => {
   const [city, setCity] = useState<string>('');
   const dispatch = useAppDispatch();
   const { data, loading, error } = useAppSelector((state) => state.weather);

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!city.trim() || loading) return;

      dispatch(fetchWeatherByCity(city.trim()));
   };

   return (
      <>
         <p>Dashboard</p>{' '}
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
            {data ? <button>Add {data.city} to favorites</button> : null}
         </form>
      </>
   );
};

export default DashboardPage;
