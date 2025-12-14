import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AuthPage from './features/auth/AuthPage.tsx';
import Dashboard from './features/dashboard/Dashboard.tsx';
import SettingsPage from './features/settings/SettingsPage.tsx';

const router = createBrowserRouter([
   {
      path: '/auth',
      element: <AuthPage />,
      errorElement: <div>404 Not Found</div>,
   },
   {
      path: '/',
      element: <Dashboard />,
      errorElement: <div>404 Not Found</div>,
   },
   {
      path: '/settings',
      element: <SettingsPage />,
      errorElement: <div>404 Not Found</div>,
   },
]);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
