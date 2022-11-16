import { useState, useEffect } from "react";
import Item from "./Item";

export default function useFetch(url, lat, long) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [load, setLoad] = useState(true);

  function handleErrors(response) {
    console.log(response);
    if (!response.ok) {
      if (response.status === 404) {
        throw Error("Not found");
      } else if (response.status === 403) {
        throw Error("Forbiden for you");
      }
      throw Error(response.status);
    }
    return response;
  }

  useEffect(() => {
    // setData([]);
    console.log("до useFetc", url);

    // setTimeout(() => {
    fetch(url)
      .then(handleErrors)
      .then((response) => response.json())
      .then((response) => setData(response))
      .then(setLoad(false))
      .catch(setError);
    // }, 1000);
  }, [url]);

  if (load) {
    return (
      <div>
        <h3>Loading ....</h3>
      </div>
    );
  }
  if (data.cod === 200) {
    return <Item data={data} />;
  }

  if (data.cod === 400) {
    console.log("message:", data.cod);
    return (
      <div>
        <h2>{data.message}</h2>
      </div>
    );
  }
  if (error) {
    const message =
      !lat.length || !long.length
        ? "Your location is not determined"
        : "Something went wrong ...";
    return (
      <div>
        <h3>{message}</h3>
      </div>
    );
  }
}
