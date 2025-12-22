import { createBrowserRouter } from 'react-router-dom';

import AuthPage from '../features/auth/AuthPage.tsx';
import DashboardPage from '../features/dashboard/DashboardPage.tsx';
import SettingsPage from '../features/settings/SettingsPage.tsx';
import NotFoundPage from '../components/NotFoundPage.tsx';
import Home from '../features/home/Home.tsx';

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/auth',
      element: <AuthPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/dashboard',
      element: <DashboardPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/settings',
      element: <SettingsPage />,
      errorElement: <NotFoundPage />,
   },
]);
