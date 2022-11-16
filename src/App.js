import "./styles.css";
import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);
  const API_KEY = "5af4b9e42db37d688a983ed3ad75d894";
  const url = `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`;

  const data = useFetch(url, lat, long);
  return (
    <div className="App">
      <h1>Hello ! </h1>
      {typeof data !== "undefined" ? <>{data}</> : <></>}
    </div>
  );
}
