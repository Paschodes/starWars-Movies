import './App.css'
import Home from './components/Home'
import { Route, Routes, Link, useRoutes } from 'react-router-dom'
import MoreInfo from './components/MoreInfo'
import NotFound from './components/NotFound'


function App() {
  

  return (
    <div className='app'>
      <Link to='/' ></Link>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/more/:index' element={<MoreInfo />}/>

        {/* wildcard */}
        <Route path='*' element={<NotFound />} />
      
      </Routes>
    </div>
  )
}

export default App
