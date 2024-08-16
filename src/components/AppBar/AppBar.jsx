import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
