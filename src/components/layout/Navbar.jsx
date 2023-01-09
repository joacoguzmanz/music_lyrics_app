import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <nav className='flex justify-between items-center bg-red-800'>
          <Link to='/' className='font-medium m-auto py-4 font-poppins text-white'>
              <span className=''>Lyrics Finder</span>
          </Link>
      </nav>
  );
}

export default Navbar;