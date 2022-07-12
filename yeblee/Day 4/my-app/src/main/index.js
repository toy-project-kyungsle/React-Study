import React, {useState} from 'react';
import '../css/main/main.css';
import Apply from './apply';
import AttendeeList from './attendeeList';
import Header from '../utils/Header';

function Main() {
	const [globalState, setGlobalState] = useState(false);
  return (
    <>
      <Header />
      <Apply globalState={globalState} setGlobalState={setGlobalState}/>
      <AttendeeList globalState={globalState}/>
    </>
  );
}

export default Main;