

import reportWebVitals from './reportWebVitals';

import './index.css';
import * as theme from './theme/theme.json';
import { setToLS } from './theme/storage.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Sports from "./routes/sport";



const Index = () => {
  setToLS('all-themes', theme.default);
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="sport" element={<Sports />} />

        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}



ReactDOM.render(
  <Index />
  , document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
