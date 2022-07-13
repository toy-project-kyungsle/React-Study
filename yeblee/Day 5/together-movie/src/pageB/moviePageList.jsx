import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/pageB/moviePageList.css";

function MoviePageList({globalPage}) {
    const [movieArr, setMovieArr] = useState(0);
    const getMovie = () => { 
        axios
        .get(`https://yts.mx/api/v2/list_movies.json?page=${globalPage}&sort_by=rating`)
        .then((res) => res.data.data.movies)
        .then((res2) => setMovieArr(res2));
    };
    useEffect(() => {
        getMovie();
    }, [globalPage]);

    return (
        <div className={(globalPage !== 0 ? "moviePage--List" : "data_none_div")}>
            <p className="moviePage--title">{globalPage} 페이지 영화 목록</p>
            <div className="attendee--imgList">
                {movieArr ?
                    movieArr.map((elem) => (
                    <div className="attendee--img" key={elem["id"]}>
                        <img className="" src={elem["medium_cover_image"]} alt={elem["medium_cover_image"]}></img>
                        <p className="attendee--text">{elem["title"]}</p>
                    </div>
                    ))
                : null
                }
            </div>
        </div>
    );
}

export default MoviePageList;