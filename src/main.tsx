import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';

import { RouterProvider } from '@tanstack/react-router';
import { router } from './routes';

import { withGoogleAuthProvider } from './lib/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {withGoogleAuthProvider(
        <RouterProvider router={router} />
      )}
    </QueryClientProvider>
  </StrictMode>
);
