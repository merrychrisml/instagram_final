import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BrowserRouter from "react-router-dom";
import Root from "pages";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
   document.getElementById('root')
);

reportWebVitals();
