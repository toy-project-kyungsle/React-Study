import React from "react";
import MovieInfo from "./movieInfo";
import MovieList from "./movieList";
import "../css/pageB/moviePage.css";

function MoviePage({setGlobalPage}) {

    return (
        <div className="movie">
            <p className="movie--title">영화 페이지 선택</p>
            <div className="movie--wrapper">
                <MovieList setGlobalPage={setGlobalPage} />
                <MovieInfo />
            </div>
        </div>
    );
}

export default MoviePage;