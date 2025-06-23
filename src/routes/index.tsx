import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Browse from '../pages/Browse'
import PostAd from '../pages/PostAd'
import Leasing from '../pages/Leasing'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Dashboard from '../pages/Dashboard'
import VehicleDetails from '../pages/VehicleDetails'
import App from '../App'

const rootRoute = createRootRoute({
  component: App,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: Login,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: Register,
})

const browseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/browse',
  component: Browse,
})

const postAdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/post-ad',
  component: PostAd,
})

const leasingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/leasing',
  component: Leasing,
})

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: Blog,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: Dashboard,
})

const vehicleDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/vehicle/:id',
  component: VehicleDetails,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  registerRoute,
  browseRoute,
  postAdRoute,
  leasingRoute,
  blogRoute,
  contactRoute,
  dashboardRoute,
  vehicleDetailsRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
