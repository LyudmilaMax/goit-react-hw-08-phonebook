import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useSelector } from 'react-redux';
import { Div, UserName, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <Div>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Div>
  );
};
