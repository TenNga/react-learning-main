import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';


const element = document.getElementById('root');
const root = createRoot(element);

root.render(<App />);
=======
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
  );
>>>>>>> 1631df4 (pull)
