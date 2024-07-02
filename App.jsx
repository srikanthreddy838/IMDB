import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navy from "./components/Navy";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watchlist from "./components/Watchlist";
import Movies from "./components/Movies";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let addtoWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };
  let removeWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchlist(filteredWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    let movielocalstorage = localStorage.getItem("movieApp");
    if (!movielocalstorage) {
      return;
    }
    setWatchlist(JSON.parse(movielocalstorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navy />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  addtoWatchlist={addtoWatchlist}
                  removeWatchlist={removeWatchlist}
                />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                removeWatchlist={removeWatchlist}
              />
            }
          />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/popular?api_key=c1b9406bcc42bfa90a2d3875a8eeef22&language=en-US&page=1
