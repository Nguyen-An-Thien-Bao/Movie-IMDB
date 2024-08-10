import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common[
    'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWNmM2MwZGQ4YjE1OTUzODdlMmIwNjBkOTc4NWRlMCIsIm5iZiI6MTcyMzI3MDk5MS42NjUwNTgsInN1YiI6IjY2YjY3NGJjMDYzYzczZTg4NGQ3NWE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjW6fs8CAErVfm_as9r7_3VGTDYW63yHVvqBtzZxxjo`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
