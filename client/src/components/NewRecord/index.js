import {Component} from "react"

import './index.css'

class NewRecord extends Component{
    state={
        ID:"",
        mobileNo:"",
        name:"",
        date:"",
        BP:"",
        FBS:"",
        PPBS:"",
        RBS:"",
        HbA1C:"",
        Urea:"",
        Creatinine:"",
        Microalbuminuria:"",
        Complaints:"",
        OtherSignificantNotes:""
    }

    onChangeID = (event) => {
        this.setState({ID:event.target.value});
    }

    onChangeMobileNo = (event) => {
        this.setState({mobileNo:event.target.value});
    }

    onChangeName = (event) => {
        this.setState({name:event.target.value});
    }

    onChangeBP = (event) => {
        this.setState({BP:event.target.value});
    }

    onChangeFBS = (event) => {
        this.setState({FBS:event.target.value});
    }

    onChangePPBS = (event) => {
        this.setState({PPBS:event.target.value});
    }

    onChangeHbA1C = (event) => {
        this.setState({HbA1C:event.target.value});
    }

    onChangeUrea = (event) => {
        this.setState({Urea:event.target.value});
    }

    onChangeCreatinine = (event) => {
        this.setState({Creatinine:event.target.value});
    }

    onChangeMicroalbuminuria = (event) => {
        this.setState({Microalbuminuria:event.target.value});
    }

    onChangeComplaints = (event) => {
        this.setState({Complaints:event.target.value});
    }

    onChangeRBS = (event) => {
        this.setState({RBS:event.target.value});
    }

    onChangeOtherSignificantNotes = (event) => {
        this.setState({OtherSignificantNotes:event.target.value});
    }

    onChangeDate = event => {
        this.setState({date:event.target.value})
    }

    render (){
        const {ID, mobileNo, name, BP, RBS, FBS, PPBS, HbA1C, Urea, Creatinine, Microalbuminuria, Complaints, OtherSignificantNotes, date} = this.state;
        console.log(date);
        return(
            <div className="newrecord-container">
                <h2>Please enter your readings</h2>
                <label className="label" htmlFor="id" >ID</label>
                <input className="input" type="text" id="id" placeholder="ID" onChange={this.onChangeID} value={ID}/>
                <label className="label" htmlFor="mobile" >Mobile No</label>
                <input className="input" type="text" id="mobile" placeholder="Mobile No" onChange={this.onChangeMobileNo} value={mobileNo}/>
                <label className="label" htmlFor="id" >name</label>
                <input className="input" type="text" id="name" placeholder="Name" onChange={this.onChangeName} value={name}/>
                <label className="label" htmlFor="date">Date</label>
                <input className="input" type="date" id="date" value={date} onChange={this.onChangeDate}/>
                <label className="label" htmlFor="BP" >BP</label>
                <input className="input" type="text" id="BP" placeholder="BP" onChange={this.onChangeBP} value={BP}/>
                <label className="label" htmlFor="RBS" >RBS</label>
                <input className="input" type="text" id="RBS" placeholder="RBS" onChange={this.onChangeRBS} value={RBS}/>
                <label className="label" htmlFor="FBS" >FBS</label>
                <input className="input" type="text" id="FBS" placeholder="FBS" onChange={this.onChangeFBS} value={FBS}/>
                <label className="label" htmlFor="PPBS" >PPBS</label>
                <input className="input" type="text" id="PPBS" placeholder="PPBS" onChange={this.onChangeID} value={PPBS}/>
                <label className="label" htmlFor="HbA1C" >HbA1C</label>
                <input className="input" type="password" id="HbA1C" placeholder="HbA1C" onChange={this.onChangeHbA1C} value={HbA1C}/>
                <label className="label" htmlFor="Urea" >Urea</label>
                <input className="input" type="text" id="urea" placeholder="Urea" onChange={this.onChangeUrea} value={Urea}/>
                <label className="label" htmlFor="Creatinine" >Creatinine</label>
                <input className="input" type="text" id="creatinine" placeholder="Creatinine" onChange={this.onChangeCreatinine} value={Creatinine}/>
                <label className="label" htmlFor="microalbuminuria" >Microalbuminuria</label>
                <input className="input" type="text" id="microalbuminuria" placeholder="Microalbuminuria" onChange={this.onChangeMicroalbuminuria} value={Microalbuminuria}/>
                <label className="label" htmlFor="Complaints" >Complaints</label>
                <input className="input" type="text" id="complaints" placeholder="Complaints" onChange={this.onChangeComplaints} value={Complaints}/>
                <label className="label" htmlFor="OtherSignificantNotes" >OtherSignificantNotes</label>
                <input className="input" type="text" id="otherSignificantNotes" placeholder="OtherSignificantNotes" onChange={this.onChangeOtherSignificantNotes} value={OtherSignificantNotes}/>
                <button type="button" className="submit-button" >Submit</button>
            </div>
        )
    }
}

export default NewRecord