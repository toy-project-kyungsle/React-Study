import React from 'react';
import Header from '../utils';
import MoviePage from './moviePage';
import MoviePageList from './moviePageList';

function PageB() {
  return (
    <>
      <Header />
      <MoviePage />
      <MoviePageList />
    </>
  );
}

export default PageB;