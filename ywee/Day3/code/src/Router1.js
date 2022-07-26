import React, { useState, useEffect } from 'react';
import './router1.css';
import Header from './Header.js';
import Apply from './Apply.js';
import List from './List.js';
import { useRecoilValue } from 'recoil';
import { ListState, PageNumber } from './ListState.js';

export default function Router1() {
  const listState = useRecoilValue(ListState);
  const pageNumber = useRecoilValue(PageNumber);

  return (
    <>
      <Header />
      <Apply />
      <List />
    </>
  );
}
