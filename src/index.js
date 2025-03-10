import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import FacebookEmojiCounter from './facebookemjio';
import ToggleMode from './togglecompent';

ReactDOM.render( 
  <React.Fragment> 
  <FacebookEmojiCounter  type= "Like"/> 
  < FacebookEmojiCounter type= "Love"/>  
  < ToggleMode/> 
  </React.Fragment>, 
  document.getElementById('root')); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
