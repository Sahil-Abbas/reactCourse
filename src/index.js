import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginState, login, logout, UserContext } from './app/context/UserContext';



ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={{loginState, login, logout}}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
