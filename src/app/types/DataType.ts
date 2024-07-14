// types.ts
export type WeatherData = {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    wind_kph: number;
    humidity: number;
    wind_dir: string;
    pressure_mb: number;
    feelslike_c: number;
    vis_km: number;
  };
  location: {
    name: string;
    region: string;
    country: string;
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          icon: string;
          text: string;
        };
        maxtemp_c: number;
        mintemp_c: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
      };
    }[];
  };
}
