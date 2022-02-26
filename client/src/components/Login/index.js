import {Component} from "react"

import './index.css'

class Login extends Component{
    state={
        ID:"",
        password:""
    }

    onChangeID = (event) => {
        this.setState({ID:event.target.value});
    }

    onChangePassword = event => {
        this.setState({password:event.target.password})
    }

    render (){
        return(
            <div className="login-container">
                <h3>Login</h3>
                <label className="label" htmlFor="id" >ID</label>
                <input className="input" type="text" id="id" placeholder="ID" onChange={this.onChangeID}/>
                <label className="label" htmlFor="password" >Password</label>
                <input className="input" type="password" id="password" placeholder="Password" onChange={this.onChangePassword}/>
                <button type="button" className="submit-button" >Login</button>
            </div>
        )
    }
}

export default Login