import React, { useEffect, useState } from "react";
import axios from "axios";
import "./movie_style.css";

function Footer() {
  const [movieArr, setMovieArr] = useState(null);
  const getMovie = () => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?page=1")
      .then((res) => res.data.data.movies)
      .then((res2) => setMovieArr(res2));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <div className="list_box">
        <div className="list">
          <div className="list_title">
            <h1>영화 목록</h1>
          </div>
          <div className="movie_box">
            {movieArr
              ? movieArr.map((elem) => (
                  <div className="movie_info">
                    <img
                      src={elem["medium_cover_image"]}
                      alt={elem["medium_cover_image"]}
                    ></img>
                    {elem.title}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function State() {
//   const [movieArr, setMovieArr] = useState(null);
//   const getMovie = () => {
//     axios
//       .get("https://yts.mx/api/v2/list_movies.json?page=1&sort_by=rating")
//       .then((res) => res.data.data.movies)
//       .then((res2) => setMovieArr(res2));
//   };

//   useEffect(() => {
//     getMovie();
//   }, []);

//   return (
//     <>
//       {movieArr
//         ? movieArr.map((elem) => (
//             <img
//               src={elem["medium_cover_image"]}
//               alt={elem["medium_cover_image"]}
//             ></img>
//           ))
//         : null}
//     </>
//   );
// }

// export default State;