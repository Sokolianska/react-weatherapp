import React from "react";
import axios from "axios";
import BarLoader from "react-spinners/BarLoader";


export default function Weather(props) {
    function handleResponce(responce) {
        alert(`The weather in ${responce.data.name} is ${responce.data.main.temp}°C`)
    }
    let apiKey = "e0dced0781a18aa3906255142be14578";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponce);
    return (
<BarLoader
  color="hsla(160, 79%, 70%, 1)"
  height={25}
  width={120}
/>
    );
}