import { WeatherEmoji } from '../features/weather/weatherTypes';

export const getWeatherEmoji = (tempC: number): string => {
   if (tempC >= 20) return WeatherEmoji.Sunny;
   if (tempC <= 0) return WeatherEmoji.Snow;
   return WeatherEmoji.PartlyCloudy;
};

interface DateFormat {
   today: number;
   formattedMonth: string;
}

export const getFormattedDate = (): DateFormat => {
   const now = new Date();
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];

   const formattedMonth = months[now.getMonth()];
   const today = now.getDate();

   return {
      today,
      formattedMonth,
   };
};
