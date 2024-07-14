// WeekForecast.tsx
import Image from "next/image";
import { WeatherData } from "../types/DataType";

type Props = {
  data: WeatherData;
};

const WeekForecast = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-6 md:gap-4 w-full text-black">
      {data.forecast.forecastday.map((day, index) => (
        <div key={index} className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center justify-around">
          <div className="flex flex-col items-center">
						<p className="text-2xl">
							{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
						</p>

						<div className="w-16 lg:w-full max-w-24">
							<Image 
								src={`https:${day.day.condition.icon}`}
								alt={day.day.condition.text}
								width={50}
								height={50}
								style={{
									width: "100%",
									height: "auto",
								}}
							/>
						</div>

						<div>
							<p>Max {Math.round(day.day.maxtemp_c)}°C</p>
							<p>Min {Math.round(day.day.mintemp_c)}°C</p>
						</div>
					</div>
        </div>
      ))}
    </div>
  )
}

export default WeekForecast;
