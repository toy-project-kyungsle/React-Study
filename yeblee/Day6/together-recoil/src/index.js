import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
  , document.getElementById('root'),
);