import { HashLink as Link } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';
import Switcher from './Switcher';
import { Button, IconButton } from "@mui/material";

function Header() {
 
  return (
   <>
   <header className="fixed w-full  mx-auto px-6 lg:px-12 py-1 dark:bg-slate-900 bg-white dark:text-white flex flex-row justify-between items-center z-50">
   <div className="flex flex-row items-center gap-10">
    <div className="flex flex-row gap-2 items-center">
      <img src="/assets/logo3.png" alt="Logo" className=" aspect-square w-12" />
      <h1 className="text-2xl font-semibold">One Health</h1>
    </div>
      <nav>
        <ul className="hidden lg:flex flex-row gap-6 text-md dark:text-slate-300 text-slate-700">
          <li className="hover:text-blue-400">
            <Link smooth to="/#home" >Home</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link smooth to="/#services" >Our Services</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link >About</Link>
          </li>
          <li className="hover:text-blue-400">
            <Link>Contact Us</Link>
          </li>
        </ul>
      </nav>
   </div>
    <div className="flex flex-row gap-2 lg:gap-6 items-center">
      <div className="hidden lg:flex flex-row gap-2">
        <Link to={'/login'}><Button variant="outlined" size="small">Login</Button></Link>
        <Link to={'/signup'}><Button variant="contained" size="small">Signup</Button></Link>
      </div>
      <div className="pt-7">
        <Switcher></Switcher>
      </div>
      <div className="lg:hidden">
        <IconButton aria-label="Menu Button">
          <MenuIcon color="primary"/>
        </IconButton>
      </div>
    </div>
   </header>
   </>
  )
}

export default Header