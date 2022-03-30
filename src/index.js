import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Footer from './component/Footer';
import Form from './component/Form';
import Slide from './component/Slide';


ReactDOM.render(
  <React.StrictMode>
    
    <Header />
    <Form />
    <Slide />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
