import React from "react";
import { useSetRecoilState } from "recoil";
import Page from "../atom/globalMovieState";
import "../css/pageB/movieList.css";

function MovieList() {
     const SetPage = useSetRecoilState(Page);
    const onMovie = (num) => {
        SetPage(num);
    };
    return (
        <div className="movie--list">
            <p>영화 목록</p>
            <p className="main--listEvent" onClick={event => onMovie(1)}>영화 페이지 1</p>
            <p className="main--listEvent" onClick={event => onMovie(2)}>영화 페이지 2</p>
            <p className="main--listEvent" onClick={event => onMovie(3)}>영화 페이지 3</p>
        </div>
    );
}

export default MovieList;