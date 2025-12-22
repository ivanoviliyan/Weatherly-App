import styles from './footer.module.css';
import { Link } from 'react-router-dom';
// import { useAppSelector } from '../../app/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faLocationDot,
   faCirclePlus,
   faBars,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
   return (
      <>
         <ul className={styles.list}>
            <li>
               <Link to={'/'}>
                  <FontAwesomeIcon icon={faLocationDot} />
               </Link>
            </li>
            <li>
               <Link to={'/dashboard'}>
                  <FontAwesomeIcon icon={faCirclePlus} />
               </Link>
            </li>
            <li>
               <Link to={'/dashboard'}>
                  <FontAwesomeIcon icon={faBars} />
               </Link>
            </li>
         </ul>
      </>
   );
};

export default Footer;
