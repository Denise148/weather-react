import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°F`
    );
  }
  let apiKey = "9c2510687917a4dd804679999e5d1803";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${props.city}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
