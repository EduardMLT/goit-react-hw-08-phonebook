import { useAuth } from 'components/UseAuth';
import { useDispatch } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';
import { Contaner, Title, ButtonUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Contaner>
      <Title>Welcome, {user.name}</Title>
      <ButtonUserMenu type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </ButtonUserMenu>
    </Contaner>
  );
};
