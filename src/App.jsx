import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cakes from './pages/Cakes/Cakes'
import Desserts from './pages/Desserts/Desserts'
import Sweets from './pages/Sweets/Sweets'
import NotFound from './pages/NotFound/NotFound'
import './Reset.css'
import './App.css'

function App() {

  const linkStyle =  {
    textDecoration: 'none', 
    color: 'black',
  }

  const routeStyle = {
    position: 'relative'
  }

  return (
    <>
      <nav>
          <ul className='ul-app'>
            <li className='li-app'>
              <Link to='/' style={linkStyle}>
                <button className='app-button'>
                  Início
                </button>
              </Link>
            </li>
            <li className='li-app'><Link to='/cakes' style={linkStyle}><button className='app-button'>Bolos</button></Link></li>
            <li className='li-app'><Link to='/sweets' style={linkStyle}><button className='app-button'>Doces</button></Link></li>
            <li className='li-app'><Link to='/desserts' style={linkStyle}><button className='app-button'>Sobremesas</button></Link></li>
          </ul>
      </nav>
      <Routes style={routeStyle}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cakes' element={<Cakes/>}></Route>
        <Route path='/desserts' element={<Desserts/>}></Route>
        <Route path='/sweets' element={<Sweets/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>

  )
}

export default App
