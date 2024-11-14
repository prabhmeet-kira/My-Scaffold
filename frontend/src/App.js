import React from 'react'
import {BrowserRouter as Router, Routes, Route , Link } from 'react-router-dom';
import Home from './components/Home'
import CrudOPS from './components/CrudOPS'
import Contact from './components/Contact'
import CrudOPS from './components/CrudOPS';

const App = () => {
  return (
    <Router>
      <div>
        {/*Navigation bar*/}
        <nav>
          <ul>
            <li><Link to="/">Go to Home</Link></li>
            <li><Link to="/crudops">Go to CRUD Operations</Link></li>
            <li><Link to="/contact">Go to Contact</Link></li>
          </ul>
        </nav>

        {/*Assigning Components file to routes*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/crudops' element={<CrudOPS />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;