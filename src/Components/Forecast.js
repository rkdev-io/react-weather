import React from "react";

export default function Forecast(props) {
  return (
    <div className="flex items-center justify-center m-auto text-center capitalize">
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>
        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}
        <p>sat</p>
      </div>
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>

        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}

        <p>sun</p>
      </div>
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>

        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}

        <p>mon</p>
      </div>
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>

        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}

        <p>tue</p>
      </div>
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>

        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}

        <p>wed</p>
      </div>
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>

        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}

        <p>thu</p>
      </div>
      <div className="p-3 m-2 border border-blue-200 rounded">
        <p className="text-sm font-normal">
          {props.getWeather?.main?.temp}&deg;C
        </p>

        {props.getWeather?.weather && (
          <img
            src={`https://openweathermap.org/img/wn/${props.getWeather?.weather[0]?.icon}.png`}
            alt=""
          />
        )}

        <p>fri</p>
      </div>
      
    </div>
  );
}
