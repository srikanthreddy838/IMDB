import React from "react";


function Moviecard({
  poster_path,
  original_title,
  addtoWatchlist,
  movieObj,
  removeWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => removeWatchlist(movieObj)}
          className="p-1 m-2 bg-gray-900/60 flex justify-center rounded-lg"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => addtoWatchlist(movieObj)}
          className="p-1 m-2 bg-gray-900/60 flex justify-center rounded-lg"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {original_title}
      </div>
    </div>
  );
}

export default Moviecard;
