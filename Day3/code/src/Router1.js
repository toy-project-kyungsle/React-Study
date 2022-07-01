import React, { useState, useEffect } from 'react';
import './router1.css';
import Header from './Header.js';
import Apply from './Apply.js';
import List from './List.js';

export default function Router1() {
  const [ListState, setListState] = useState(false);
  return (
    <>
      <Header />
      <Apply ListState={ListState} setListState={setListState} />
      <List ListState={ListState} setListState={setListState} />
    </>
  );
}
