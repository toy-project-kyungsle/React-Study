import React, {useState} from 'react';
import Header from '../utils/Header';
import Apply from './apply';
import AttendeeList from './attendeeList';

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