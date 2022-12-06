import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/Global';
import { UserProvider } from './contexts/UserContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <GlobalStyles />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
