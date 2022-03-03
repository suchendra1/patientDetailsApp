import Cookies from "js-cookie"
import "./index.css"

const fetchMedicalData = async () =>{
    const url = 'http://localhost:3005/showrecord'
    const options = {
    method: 'GET',
    headers:{"Content-Type":"application/json",
    "Authorization":"BEARER "+Cookies.get("jwt_token")}
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data);
    return data
}

const medicalDetails = fetchMedicalData();

console.log(medicalDetails);
//const medicalParameters = Object.keys(medicalDetials[0])

const ShowRecord = props => {
    return (
        <div className="record-container">
            <table>{<tr>
                medicalDetails.map(function(eachRecord){
                    <th>eachRecord.date</th>
                });
                </tr>}</table>
        </div>
    )
}

export default ShowRecord