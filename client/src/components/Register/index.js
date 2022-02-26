import {Component} from "react"

import './index.css'

class Register extends Component{
    state={
        ID:"",
        password:"",
        confirmPassword:""
    }

    onChangeID = (event) => {
        this.setState({ID:event.target.value});
    }

    onChangePassword = event => {
        this.setState({password:event.target.value})
    }

    onChangeConfirmPassword = event => {
        this.setState({confirmPassword:event.target.value})
    }

    render (){
        const {ID, password,confirmPassword} = this.state;
        const isNotMatch = password !== confirmPassword && confirmPassword !== "";
        return(
            <div className="register-container">
                <h3>Register</h3>
                <label className="label" htmlFor="id" >ID</label>
                <input className="input" type="text" id="id" placeholder="ID" onChange={this.onChangeID} value={ID}/>
                <label className="label" htmlFor="password" >Password</label>
                <input className="input" type="password" id="password" placeholder="Password" onChange={this.onChangePassword} value={password}/>
                <label className="label" htmlFor="confirm-password" >Confirm Password</label>
                <input className="input" type="password" id="confirm-password" placeholder="Confirm Password" onChange={this.onChangeConfirmPassword} value={confirmPassword}/>
                <p className="error">{isNotMatch ? "Confirm password does not match with password!" : ""}</p>
                <button type="button" className="submit-button" >Register</button>
            </div>
        )
    }
}

export default Register