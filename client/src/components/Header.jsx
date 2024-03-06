import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import Switcher from './Switcher';
import { IconButton } from "@mui/material";


function Header() {
 
  return (
   <>
   <header className="shadow-lg  mx-auto px-6 py-1 dark:bg-slate-900 dark:text-white flex flex-row justify-between items-center">
   <img src="/assets/cardiology.png" alt="Logo" className=" aspect-square w-12" />
    <nav>
      <ul className="hidden md:flex flex-row gap-6">
        <li>
          <Link >Home</Link>
        </li>
        <li>
          <Link >About</Link>
        </li>
        <li>
          <Link >Features</Link>
        </li>
        <li>
          <Link >Resources</Link>
        </li>
        <li>
          <Link>Contact Us</Link>
        </li>
      </ul>
    </nav>
    <div className="flex flex-row gap-2 md:gap-6 items-center">
      <div className="pt-7">
        <Switcher></Switcher>
      </div>
      <IconButton>
        <MenuIcon color="primary"/>
      </IconButton>
    </div>
   </header>
   </>
  )
}

export default Header