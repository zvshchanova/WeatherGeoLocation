import React from "react";
import { Card } from "react-bootstrap";

export default function Item({ data }) {
  const temp = Math.ceil(data.main.temp);
  return (
    <Card>
      <Card.Body className="sm mx-auto">
        <Card.Title as="h2" className="bg-success text-white p-2">
          Your location is: {data.name} {data.sys.country}
        </Card.Title>
        <Card.Text className="bg-info text-start p-2">
          <p>{data.weather[0].main}</p>
          <div>
            <p>Temperature: {temp}°C</p>
            <p>Wind speed: {data.wind.speed} km/s</p>
            <p>Humidity: {data.main.humidity}%</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
