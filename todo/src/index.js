import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import TodoContextProvider from "./context/useTodoContext";

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <TodoContextProvider>
        <App />
    </TodoContextProvider>
    );