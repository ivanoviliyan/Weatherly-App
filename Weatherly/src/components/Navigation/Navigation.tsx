import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faUser,
   faArrowRightToBracket,
   faCloudBolt,
} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
   const isAuthenticated = useAppSelector((state) =>
      Boolean(state.auth.isAuthenticated)
   );

   return (
      <header className={styles.header}>
         <nav className={styles.nav}>
            <ul className={styles.list}>
               <li className={styles.link}>
                  <Link to={'/'}>
                     <span className={styles.logo}>
                        <FontAwesomeIcon icon={faCloudBolt} />{' '}
                     </span>
                     Weatherly
                  </Link>
               </li>
               {!isAuthenticated && (
                  <li className={styles.link}>
                     <Link to={'/auth'}>
                        <FontAwesomeIcon icon={faUser} />
                     </Link>
                  </li>
               )}
               {isAuthenticated && (
                  <li className={styles.link}>
                     <FontAwesomeIcon icon={faArrowRightToBracket} />
                  </li>
               )}
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
