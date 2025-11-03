import { createBrowserRouter, type RouteObject } from 'react-router-dom';
import { HomePage } from '@pages/home';

const createRoute = (route: RouteObject): RouteObject => route;

const rootRoute = createRoute({
  path: '/',
  element: <HomePage />,
});

export const router = createBrowserRouter([rootRoute]);
