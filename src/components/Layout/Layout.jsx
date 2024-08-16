import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = () => (
  <div className={styles.container}>
    <AppBar />
    <Outlet />
  </div>
);

export default Layout;
