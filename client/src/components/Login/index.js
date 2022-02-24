import {Component} from "react"

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
            <div className="container">
                <label for="id" >ID</label>
                <input type="text" id="id" placeholder="ID" onChange={this.onChangeID}/>
                <label for="password" >ID</label>
                <input type="password" id="password" placeholder="Password" onChange={this.onChangePassword}/>
            </div>
        )
    }
}

export default Login