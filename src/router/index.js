let routes = [];

export const createRouteConfiguration = (route) => {
  routes = [...routes, route];
};

export const getRouteConfiguration = () => routes;

export { Router } from './Router';
export { Route } from './Route';