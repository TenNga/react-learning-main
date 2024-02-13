import React from "react";
import { createRoot, CreateRoot } from "react-dom/client";
import App from './App';
import { Provider } from "react-redux";
import { store } from './store';

const element = document.getElementById('root');
const root = createRoot(element);

root.render(<Provider store={store}>
        <App/>
    </Provider>);



