import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AuthPage from './features/auth/AuthPage.tsx';
import DashboardPage from './features/dashboard/DashboardPage.tsx';
import SettingsPage from './features/settings/SettingsPage.tsx';
import NotFoundPage from './components/NotFoundPage.tsx';

const router = createBrowserRouter([
   {
      path: '/auth',
      element: <AuthPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/',
      element: <DashboardPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/settings',
      element: <SettingsPage />,
      errorElement: <NotFoundPage />,
   },
]);

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
