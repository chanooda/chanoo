import ReactDOM from 'react-dom/client';
import { QueryClientProvider, getQueryClient } from 'chanoo-react-query';
import './index.css';
import App from './App';

const queryClient = getQueryClient();

ReactDOM.createRoot(document?.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
