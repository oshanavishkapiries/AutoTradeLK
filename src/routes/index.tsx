import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Browse from '../pages/Browse';
import PostAd from '../pages/PostAd';
import Leasing from '../pages/Leasing';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import VehicleDetails from '../pages/VehicleDetails';
import ProtectedRoute from '../components/ProtectedRoute';
import Layout from '../layouts/Layout';
import SignUp from '../pages/SignUp';

const rootRoute = createRootRoute({
  component: Layout,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: Login,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/signup',
    component: SignUp,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/browse',
    component: Browse,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/post-ad',
    component: PostAd,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/leasing',
    component: Leasing,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/blog',
    component: Blog,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: Contact,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/dashboard',
    component: () => (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/vehicle/:id',
    component: VehicleDetails,
  }),
]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
