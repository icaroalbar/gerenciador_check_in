import { Navigate } from 'react-router-dom';
import { ILayout } from '../components/partials/layout';

const RedirectHomeRoute = ({ children }: ILayout) => {
  const token = localStorage.getItem('token');

  if (token) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default RedirectHomeRoute;
