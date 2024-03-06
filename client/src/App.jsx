import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header className='dark:bg-slate-900'/>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
