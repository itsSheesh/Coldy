import React from "react";
import { FiDroplet } from "react-icons/fi";
import { ImMeter } from "react-icons/im";
import { LuEye, LuSunrise, LuSunset } from "react-icons/lu";
import { MdAir } from "react-icons/md";

export interface WeatherDetailProps {
  visibility: string;
  humidity: string;
  windSpeed: string;
  airPressure: string;
  sunrise: string;
  sunset: string;
}
export default function WeatherDatails(props: WeatherDetailProps) {
    const {
        visibility = "25km",
        humidity = "61%",
        windSpeed = "9 km/h",
        airPressure = "1018 hPa",
        sunrise = "6:39",
        sunset = "18:19"
    } = props
  return (
    <>
        <SingleWeatherDetail
        icon={<LuEye />}
        information="Visibility"
        value={props.visibility}
        />
        <SingleWeatherDetail
        icon={<FiDroplet />}
        information="Humidity"
        value={props.humidity}
        />
        <SingleWeatherDetail
        icon={<MdAir />}
        information="Wind Speed"
        value={props.windSpeed}
        />
        <SingleWeatherDetail
        icon={<ImMeter />}
        information="Air Pressure"
        value={props.airPressure}
        />
        <SingleWeatherDetail
        icon={<LuSunrise />}
        information="Sunrise"
        value={props.sunrise}
        />
        <SingleWeatherDetail
        icon={<LuSunset />}
        information="Sunset"
        value={props.sunset}
        />
    </>
  );
}

export interface SingleWeatherDetailsProps {
  information: string;
  icon: React.ReactNode;
  value: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailsProps) {
  return (
    <div className="flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80">
      <p className="whitespace-nowrap">{props.information}</p>
      <div className="text-3xl">{props.icon}</div>
      <p>{props.value}</p>
    </div>
  );
}