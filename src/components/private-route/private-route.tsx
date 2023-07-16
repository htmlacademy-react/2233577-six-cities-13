import { Navigate } from 'react-router-dom';
import {AppRoute, AuthorizationStatus } from '../../const';

type TPrivateRoute = {
  authStatus:AuthorizationStatus;
  children: JSX.Element;
}


function PrivateRoute({authStatus, children}:TPrivateRoute) : JSX.Element {

  return(
    authStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;