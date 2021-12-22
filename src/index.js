import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Beranda from '../src/pages/Beranda';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login/Index';
import Chat from './pages/Chat';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
