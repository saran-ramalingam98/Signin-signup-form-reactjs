import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sample1 from './Component/Sample1';
import Sample from './Component/Sample';
import Detail from './Component/Detail';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
ReactDOM.render(
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<App/>}></Route>
   
   <Route path="/sample1" element={<Sample1></Sample1>}></Route>
   <Route path="/sample" element={<Sample></Sample>}></Route>
   <Route path="/Detail" element={<Detail></Detail>}></Route>   

 </Routes>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
