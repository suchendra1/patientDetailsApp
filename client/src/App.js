import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
// import Register from './components/Register'
// import NewRecord from './components/NewRecord'
// import ShowRecord from './components/ShowRecord'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/login" component={Login} />
      {/* <Route path="/register" component={Register} />
      <Route path="/newrecord" component={NewRecord} />
      <Route path="/showrecord" component={ShowRecord} /> */}
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
)

export default App