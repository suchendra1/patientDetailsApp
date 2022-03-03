import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Logout from './components/Logout'
import Register from './components/Register'
import NewRecord from './components/NewRecord'
import ShowRecord from './components/ShowRecord'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Cookies from "js-cookie";

import './App.css'

const isLogged = Cookies.get("jwt_token") !== undefined;
console.log(isLogged)
let logComponent = undefined;
if(!isLogged)
  logComponent = Login;
else
  logComponent = Logout;
  
const App = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={logComponent} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/newrecord" component={NewRecord} />
        <ProtectedRoute path="/showrecord" element={ShowRecord} /> 
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App