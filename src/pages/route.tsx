import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { Layout } from './main';

export const RouteConfig: RouteObject[] = [
  {
    path: 'login',
    // element: <Login />,
  },
  {
    path: 'home',
    element: <Layout />,
  },
  {
    path: '*',
    element: <Navigate to={'home'} />,
  },
];

export const router = createBrowserRouter(RouteConfig, { basename: '/' });
