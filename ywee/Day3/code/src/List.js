import React, { useState, useEffect } from 'react';
import './router1.css';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { ListState, PageNumber } from './ListState.js';

//import profile1 from './profile 1.png';
//import profile2 from './profile 2.png';
//import profile3 from './profile 3.png';
//import profile4 from './profile 4.png';
//import profile5 from './profile 5.png';
//import profile6 from './profile 6.png';
//function List({ ListState, setListState }) {
//  const A = [
//    { id: 'tkim', image: profile1 },
//    { id: 'kyungsle', image: profile2 },
//    { id: 'jimin', image: profile3 },
//    { id: 'seunam', image: profile4 },
//    { id: 'jwoo', image: profile5 },
//    { id: 'jolim', image: profile6 },
//  ];

//  return (
//    <>
//      {!ListState ? (
//        <div></div>
//      ) : (
//        <div class="body">
//          <p class="create_list_title">친바 생성 목록</p>
//          <div class="list_image">
//            {A.map((elem) => (
//              <>
//                <div class="image_each">
//                  <img src={elem.image}></img>
//                  <p class="elem_id">{elem.id}</p>
//                </div>
//              </>
//            ))}
//          </div>
//        </div>
//      )}
//    </>
//  );
//}

function List() {
  const [movieArr, setMovieArr] = useState(null);
  const [listState, setListState] = useRecoilState(ListState);
  const [pageNumber, SetPageNumber] = useRecoilState(PageNumber);

  const getMovie = () => {
    axios
      .get(
        `https://yts.mx/api/v2/list_movies.json?page=${PageNumber}&sort_by=rating`
      )
      .then((res) => res.data.data.movies)
      .then((res2) => setMovieArr(res2))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovie();
  }, [pageNumber]);

  return (
    <div class="movie">
      {!listState ? (
        <></>
      ) : movieArr ? (
        movieArr.map((elem) => (
          <div class="movie_container">
            <img
              src={elem['medium_cover_image']}
              alt={elem['medium_cover_image']}
            ></img>
            <p>{elem['title']}</p>
          </div>
        ))
      ) : null}
    </div>
  );
}

export default List;

// 가상 이벤트 1, 2 다 list state 하나 써서 클릭하면 없어지는 문제가 있다 ! ㅎㅎ
