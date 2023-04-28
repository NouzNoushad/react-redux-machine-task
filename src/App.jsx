import viteLogo from '/vite.svg'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Products from './pages/Products/Products'
import Details from './pages/Details/Details'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<Details/> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
