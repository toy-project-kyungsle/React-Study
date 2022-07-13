import React, {useState} from 'react';
import Header from '../utils/Header';
import MoviePage from './moviePage';
import MoviePageList from './moviePageList';

function PageB() {
	const [globalPage, setGlobalPage] = useState(0);
  return (
    <>
      <Header />
      <MoviePage setGlobalPage={setGlobalPage}/>
      <MoviePageList globalPage={globalPage}/>
    </>
  );
}

export default PageB;