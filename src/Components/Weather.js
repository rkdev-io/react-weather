import React, { useState } from "react";
import Forecast from "./Forecast";
import moment from "moment/moment";

export default function Weather() {
  const [searchLocation, setSearchLocation] = useState("");
  const [getWeather, setGetWeather] = useState({});

  const handleWeather = () => {
    const API_KEY = "38f585ca82bb46732d00404c8adef241";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&appid=${API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => setGetWeather(data));
  };

  return (
    <div>
      <main className="flex flex-wrap items-center justify-around m-5 leading-8 capitalize tracking-wide">
        <div className="p-5">
          <div>
            {getWeather?.weather && (
              <>
                <img
                  src={`https://openweathermap.org/img/wn/${getWeather?.weather[0]?.icon}@2x.png`}
                  alt=""
                />
                <p className="font-semibold">
                  {getWeather?.weather[0]?.description}
                </p>
              </>
            )}
          </div>

          <div>
            <p className="font-semibold text-2xl mb-1">
              {getWeather?.name}, {getWeather?.sys?.country}
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold">
              {getWeather?.main?.temp} &deg;C
            </p>
          </div>
          <div>
            <p>Sunrise: {new Date(getWeather?.sys?.sunrise * 1000).toLocaleTimeString("en-IN")}</p>
            <p>Sunset:{new Date(getWeather?.sys?.sunset * 1000).toLocaleTimeString("en-IN")}</p>
          </div>
          <div>
            <p>Day: {moment().format("dddd")}</p>
            <p>Date: {moment().format("LL")}</p>
          </div>
        </div>
        <div className="p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleWeather(searchLocation);
            }}
          >
            <input
              type="text"
              className="mt-1 mb-5 block w-full px-3 py-2 bg-transparent border border-white rounded-sm text-sm placeholder-white outline-none focus:outline-none  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Search Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
          </form>

          <div>
            Latitude
            <div className="text-xl font-bold">{getWeather?.coord?.lat}</div>
          </div>

          <div>
            Longitude
            <div className="text-xl font-bold">{getWeather?.coord?.lon}</div>
          </div>

          <div>
            Humidity
            <div className="text-xl font-bold">
              {getWeather?.main?.humidity}%
            </div>
          </div>

          <div>
            wind
            <p className="text-xl font-bold"> {getWeather?.wind?.deg} Deg</p>
            <p className="text-xl font-bold">{getWeather?.wind?.speed} Km/hr</p>
          </div>
        </div>
      </main>

      <Forecast getWeather={getWeather} />
    </div>
  );
}
