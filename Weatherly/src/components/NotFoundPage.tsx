import { Link } from 'react-router-dom';

const NotFoundPage = () => {
   return (
      <div>
         <p>404 Not Found</p>
         <Link to='/'>
            <button>Go back</button>
         </Link>
      </div>
   );
};

export default NotFoundPage;
