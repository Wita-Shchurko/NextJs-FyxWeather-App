import { BsSunrise, BsSunset } from "react-icons/bs";
import { GiWindSlap, GiCompass } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { WeatherData } from "../types/DataType"; 
import { DatailsCard } from "./DatailsCard";

type Props = {
  data: WeatherData;
};

const WeatherDetails = ({ data }: Props) => {
  return (
		<div className="pt-12 text-black">
			<h2 className="mb-4 text-3xl font-bold">Weather details</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

				<DatailsCard 
					title="Wind speed"	
					data={data.current.wind_kph}
					unit="km/h"
					Icon={GiWindSlap}
				/>

				<DatailsCard 
					title="Humidity"	
					data={data.current.humidity}
					unit="%"
					Icon={WiHumidity}
				/>

				<DatailsCard 
					title="Wind direction"	
					data={data.current.wind_dir}
					Icon={GiCompass}
				/>

				<DatailsCard 
					title="Sunrise"	
					data={data.forecast.forecastday[0].astro.sunrise}
					Icon={BsSunrise}
				/>

				<DatailsCard 
					title="Sunset"	
					data={data.forecast.forecastday[0].astro.sunset}
					Icon={BsSunset}
				/>

				<DatailsCard 
					title="Air pressure"	
					data={data.current.pressure_mb}
					unit="hPa"
					Icon={MdAir}
				/>

				<DatailsCard 
					title="Feels like"	
					data={data.current.feelslike_c}
					unit="°C"
					Icon={CiTempHigh}
				/>

				<DatailsCard 
					title="Visibility"	
					data={data.current.vis_km}
					unit="km"
					Icon={FaEye}
				/>
			</div>
		</div>
  )
}

export default WeatherDetails;
