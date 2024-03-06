import { Button } from "@mui/material"
import { Link } from "react-router-dom"

function Home() {
  return (
    <section className=" dark:bg-slate-900 w-full bg-[url('/assets/hero1.jpg')] bg-center bg-cover mx-auto px-6 lg:px-12 py-6 lg:py-12 flex flex-col text-xl">
      <div className="flex flex-col gap-4 lg:w-2/5">
        <div className="container mx-auto flex gap-4 flex-col items-center backdrop-blur-md bg-white/10 p-6 ">
          <h2 className="font-semibold">Your Health. Your Control.</h2>
          <p className="">One Health is revolutionizing healthcare by putting patients at the center. Our Global Medical Record Management System (GMRMS) provides
             a centralized platform for managing your medical information, empowering you to take control of your health journey.
          </p>
        </div>
        <div className="container mx-auto flex gap-4 flex-col items-center backdrop-blur-md bg-white/10 p-6 ">
          <h2 className="font-semibold">With One Health, you can:</h2>
          <ul className="list-disc">
            <li>Access your complete medical information securely.</li>
            <li>Book appointments with healthcare providers online.</li>
            <li>Share your medical data seamlessly with your consent.</li>
            <li>Manage your insurance information efficiently.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-center py-6">
        <Link><Button variant="contained" size="large">Signup</Button></Link>
      </div>
    </section>
  )
}

export default Home