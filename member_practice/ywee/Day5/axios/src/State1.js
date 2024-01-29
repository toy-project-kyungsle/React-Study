import React, { useState, useEffect } from "react";
import axios from "axios";

function State() {
  const [movieArr, setMovieArr] = useState(null);
  const getMovie = () => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?page=1&sort_by=rating")
      .then((res) => res.data.data.movies)
      .then((res2) => setMovieArr(res2));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {movieArr
        ? movieArr.map((elem) => (
            <img
              src={elem["medium_cover_image"]}
              alt={elem["medium_cover_image"]}
            ></img>
          ))
        : null}
    </>
  );
}

export default State;
