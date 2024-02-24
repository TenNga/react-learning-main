import React from "react";
import { createRoot, CreateRoot } from "react-dom/client";
import App from './App';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { store } from "./store";
import 'bulma/css/bulma.css';
import './styles.css';
=======
import { Provider } from "react-redux";
import { store } from './store';
>>>>>>> 3814c26d3103fc5e308b9f47ff379e680dacdadb

const element = document.getElementById('root');
const root = createRoot(element);

root.render(<Provider store={store}>
        <App/>
    </Provider>);



