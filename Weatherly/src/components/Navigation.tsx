import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

const Navigation = () => {
   const isAuthenticated = useAppSelector((state) =>
      Boolean(state.auth.isAuthenticated)
   );

   return (
      <header>
         <nav>
            <ul>
               <li>
                  <Link to={'/'}>Weatherly</Link>
               </li>
               <li>
                  <Link to={'/settings'}>Settings</Link>
               </li>
               {!isAuthenticated && (
                  <li>
                     <Link to={'/auth'}>Login / Register</Link>
                  </li>
               )}
               {isAuthenticated && <li>Logout</li>}
            </ul>
         </nav>
      </header>
   );
};

export default Navigation;
