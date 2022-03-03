import {Component} from "react"

import './index.css'

class Register extends Component{
    state={
        ID:"",
        password:"",
        confirmPassword:"",
        message:""
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

    onClickregister = async event => {
        const {ID,password,isNotMatch}=this.state
        if(isNotMatch)
            return;
        const url="http://localhost:3005/register"
        const userDetails = {memberid:ID,password}
        const options = {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(userDetails)}

        const res = await fetch(url,options)
        if(res.ok === true)
            this.setState({message:"User added successfully!"})
    }

    render (){
        const {ID, password,confirmPassword,message} = this.state;
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
                <button type="button" className="submit-button" onClick={this.onClickregister} >Register</button>
                <p>{message}</p>
            </div>
        )
    }
}

export default Register