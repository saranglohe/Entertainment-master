import Head from "./Components/Head";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trending from "./Components/Pages/Trending";
import Movie from "./Components/Pages/Movie";
import TVSeries from "./Components/Pages/TVSeries";
import Search from "./Components/Pages/Search";
import NotAvailable from "./Components/Pages/NotAvailable";
import React from "react";

// const Trending = React.lazy(() => import("./Components/Trending"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Head />}>
              <Route index element={<Trending />} />
              <Route path="movie" element={<Movie />} />
              <Route path="tv" element={<TVSeries />} />
              <Route path="search" element={<Search />} />
              <Route path="*" element={<NotAvailable />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
