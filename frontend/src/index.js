import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import Root from "pages";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
   document.getElementById('root')
);

reportWebVitals();
