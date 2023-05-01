import { NavLink } from 'react-router-dom';
import { Nav } from './Auth.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Nav>
  );
};
