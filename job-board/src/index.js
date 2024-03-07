import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/Jobs';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <App />
    </Provider>
  </QueryClientProvider>
);

