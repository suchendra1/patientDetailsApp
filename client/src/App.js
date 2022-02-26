import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import NewRecord from './components/NewRecord'
// import ShowRecord from './components/ShowRecord'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/newrecord" element={<NewRecord/>} />
        {/*<Route path="/showrecord" element={ShowRecord} /> */}
      <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App