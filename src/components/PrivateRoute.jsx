import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
