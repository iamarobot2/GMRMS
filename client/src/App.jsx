import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header className='container w-full m-2 dark:bg-slate-900' />
      <main className='container w-full m-2 dark:bg-slate-900'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
