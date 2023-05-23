import ReactDom from 'react-dom/client';
import { QueryClientProvider, getQueryClient } from 'chanoo-react-query';
import App from './App';

const queryClient = getQueryClient();

ReactDom.createRoot(document?.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
