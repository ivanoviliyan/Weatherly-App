import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import styles from './Navigation.module.css';

const Navigation = () => {
   const isAuthenticated = useAppSelector((state) =>
      Boolean(state.auth.isAuthenticated)
   );

   return (
      <header className={styles.header}>
         <nav className={styles.nav}>
            <ul className={styles.list}>
               <li className={styles.link}>
                  <Link to={'/'}>☀️ Weatherly</Link>
               </li>
               <li className={styles.link}>
                  <Link to={'/settings'}>⚙️ Settings</Link>
               </li>
               {!isAuthenticated && (
                  <li className={styles.link}>
                     <Link to={'/auth'}>👤 Login / Register</Link>
                  </li>
               )}
               {isAuthenticated && <li className={styles.link}>Logout</li>}
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
