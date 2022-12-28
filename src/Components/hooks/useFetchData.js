import { useState } from "react";

export default function useFetchData() {
  const [fetchedData, setFetcheddata] = useState([]);
  let fetching = (url) => {
    let data = fetch(url);
    data
      .then((elm) => {
        return elm.json();
      })
      .then((elm) => {
        setFetcheddata(elm.results);
      });
  };

  return [fetchedData, fetching];
}
