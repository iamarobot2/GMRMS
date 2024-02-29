import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className=' w-full m-2'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
