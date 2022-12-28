import React, { useEffect, useState } from "react";
import SingleCard from "./subPages/SingleCard";
import Footer from "./subPages/Footer";
import useFetchData from "../hooks/useFetchData";

export default function TVSeries() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [data, searching] = useFetchData();
  let url = `https://api.themoviedb.org/3/discover/tv?api_key=9b6d4484579f620925d5cf5bf1adddcf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

  useEffect(() => {
    searching(url);
  }, [page]);
  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <div>
      <div className="headHeader">
        <h1>TV Shows</h1>
      </div>
      <hr />
      <div className="hsContent">
        <SingleCard data={items} />
      </div>
      <div className="footcontent">
        <Footer page={page} setPage={setPage} />
      </div>
    </div>
  );
}
