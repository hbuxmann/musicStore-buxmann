import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAcnNfLMYrGyDfRZ5Hl7NbTlxJxi2MiKuk",
  authDomain: "coder-house-e-commerce.firebaseapp.com",
  projectId: "coder-house-e-commerce",
  storageBucket: "coder-house-e-commerce.appspot.com",
  messagingSenderId: "756601376945",
  appId: "1:756601376945:web:b5f561169a6cfb13b4d290",
  measurementId: "G-FFC8DY74MN"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
