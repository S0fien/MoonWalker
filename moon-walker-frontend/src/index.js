import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GeistProvider themeType={'dark'}>
                <CssBaseline />
                <App />
            </GeistProvider>
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
