import Image from "next/image";
import { getCurrentDate } from "../utils/CurrentDate";
import { MdLocationOn } from "react-icons/md";
import { WeatherData } from "../types/DataType";

type Props = {
  data: WeatherData;
};

const Current = ({ data }: Props) => {
  const currentDate = getCurrentDate();
  const weatherIcon = data.current.condition.icon;

  return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4 md:gap-1">
				<div className="flex flex-col items-start gap-2">
					<div className="flex flex-row gap-2">
						<div className="flex flex-col">
							<h2 className="text-5xl">Today</h2>

							<p className="pt-3">{currentDate}</p>
						</div>
					</div>

					<div>
						<p className="text-5xl ">
							{Math.round(data.current.temp_c)}°C
						</p>

						<span className="">{data.current.condition.text}</span>
					</div>
				</div>

				<div className="w-full max-w-40 md:w-20">
					{weatherIcon && (
						<Image 
							src={`https:${weatherIcon}`}
							alt="weather icon"
							width={50}
							height={50}
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					)}
				</div>
			</div>

			<div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl gap-1 w-fit mb-6 lg:mb-0">
				<MdLocationOn className="text-3xl"/>

				<span>{data.location.name}, {data.location.region || data.location.country}</span>
			</div>
		</div>
  )
}

export default Current;
