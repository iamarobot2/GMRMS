import { Link } from "react-router-dom"

function Header() {
  return (
   <>
   <header className="shadow-lg shadow-cyan-500/50 flex flex-row  w-full h-20 items-center justify-between">
    <nav className="flex flex-row items-center justify-between">
      <img src="/public/assets/cardiology.png" alt="Logo" className=" aspect-square w-10" />
      <ul className="flex flex-row items-center justify-center gap-3">
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
   </header>
   </>
  )
}

export default Header