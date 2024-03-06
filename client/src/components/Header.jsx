import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import Switcher from './Switcher';
import { Button, IconButton } from "@mui/material";


function Header() {
 
  return (
   <>
   <header className="shadow-lg shadow-slate-500 w-full  mx-auto px-6 lg:px-12 py-1 dark:bg-slate-900 dark:text-white flex flex-row justify-between items-center">
   <div className="flex flex-row items-center gap-10">
    <div className="flex flex-row gap-4 items-center">
      <img src="/assets/logo3.png" alt="Logo" className=" aspect-square w-12" />
      <h1 className="text-2xl font-semibold">One Health</h1>
    </div>
      <nav>
        <ul className="hidden lg:flex flex-row gap-6 text-md dark:text-slate-300 text-slate-700">
          <li className="hover:text-blue-300">
            <Link >Home</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link >About</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link >Features</Link>
          </li>
          <li className="hover:text-blue-300">
            <Link >Resources</Link>
          </li>
          <li className="hover:text-blue-300">
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