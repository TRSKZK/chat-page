import React from 'react';
import ReactDOM from 'react-dom';

import store from './app/store'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Baloo Tammudu 2', cursive;
}
`


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
