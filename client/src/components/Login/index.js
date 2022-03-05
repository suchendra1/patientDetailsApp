import {Component} from "react"
import Cookies from 'js-cookie'

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
        this.setState({password:event.target.value})
    }

    onSubmitSuccess = jwtToken => {
        const {history} = this.props;
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        history.replace('/');
    }

    onClickLogin = async event => {
        const {ID, password} = this.state
        const userDetails = {memberid:ID, password}
        const url = 'http://localhost:3005/login'
        const options = {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
        }
    }

    render (){
        return(
            <div className="login-container">
                <h3>Login</h3>
                {/* <label className="label" htmlFor="id" >ID</label> */}
                <input className="input" type="text" id="id" placeholder="ID" onChange={this.onChangeID}/>
                {/* <label className="label" htmlFor="password" >Password</label> */}
                <input className="input" type="password" id="password" placeholder="Password" onChange={this.onChangePassword}/>
                <button type="button" className="submit-button bn632-hover bn20" onClick={this.onClickLogin}>Login</button>
            </div>
        )
    }
}

export default Login