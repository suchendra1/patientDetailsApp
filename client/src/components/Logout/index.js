import {Component} from "react"
import Cookies from "js-cookie"

class Logout extends Component{
    onClickLogout=()=>{
        console.log("clicked logout");
        Cookies.remove("jwt_token");
    }

    render(){
        return(
            <div className="logout-container">
                <p>You have already loggedin!!!</p>
                <button type="button" className="submit-button" onClick={this.onClickLogout}>Logout</button>
            </div>
        )
    }
}

export default Logout;