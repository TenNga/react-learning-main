import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "./contexts/ShopList";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider>
      <App />
    </Provider>
  </QueryClientProvider>
);
