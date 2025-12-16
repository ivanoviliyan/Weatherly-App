export interface WeatherData {
   city: string;
   tempC: number;
   tempF: number;
}

export interface WeatherState {
   data: WeatherData | null;
   loading: boolean;
   error: string | null;
}

export interface WeatherApiResponse {
   location: {
      name: string;
      region: string;
      country: string;
      lat: number;
      lon: number;
      tz_id: string;
      localtime_epoch: number;
      localtime: number;
   };
   current: {
      temp_c: number;
      temp_f: number;
      is_day: number;
      condition: {
         icon: string;
      };
   };
}
