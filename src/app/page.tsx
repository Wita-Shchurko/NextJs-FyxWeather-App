"use client";

import React, { useState } from "react";
import Image from "next/image";
import Input from "./components/Input";
import cloudGif from "../../public/logo-pink-cloud-animation.gif";
import Current from "./components/Current";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherData } from "./types/DataType";

const Home = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=fc39039d29714f6e99a60504241007&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const data: WeatherData = await response.json();

        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found!");
        setData(null);
      }
    }
  }

  let content;

  if (data === null && error === "") {
    content = (
      <h2 className="text-3xl font-bold mb-4 text-center">Welcome to the weather&nbsp;app</h2>
    );
  } else if (error !== "") {
    content = (
      <>
				<h2 className="text-3xl font-bold mb-4 text-center">City not found :(</h2>
        <p className="text-xl text-center">Enter a valid city</p>
			</>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col justify-between md:gap-6">
          <Current data={data!} />
          <WeekForecast data={data!} />
        </div>
        <div>
          <WeatherDetails data={data!} />
        </div>
      </>
    );
  }

  return (
    <div className="bg-cover bg-gradient-to-b from-blue-500 to-pink-200 h-fit min-h-screen text-white">
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12">
          <div className="flex flex-row items-center gap-2 my-4">
            <h1 className="text-4xl md:text-5xl">FyxWeather</h1>
            <Image 
              src={cloudGif}
              alt="logo-cloud-gif"
              style={{
                width: "auto",
                height: "5rem",
              }}
							unoptimized
            />
          </div>
          <Input 
            handleSearch={handleSearch}
            setLocation={setLocation}
          />
        </div>

				<div className="p-6 md:p-12">
					{content}
				</div>
      </div>
    </div>
  );
}

export default Home;
