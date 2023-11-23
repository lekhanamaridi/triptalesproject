import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function Beaches1(){
    let { BeachName } = useParams();

    let [beachesdetails,setbeachesDetails] = useState({})

    useEffect(()=>{

        let bodyData = { "BeachName":BeachName
        };

        fetch( 'http://localhost:3000/beachesdata',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setbeachesDetails(val[0])
            }
        )})

    },[])

    let [beachesimagedetails,setbeachesimageDetails] = useState([])

    useEffect(()=>{

        let bodyData = { 

            "BeachName":BeachName
        };

        fetch( 'http://localhost:3000/beachesimages',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setbeachesimageDetails(val)
            }
        )})

    },[BeachName])


 
 
    return(
        <div className="complete">
            <div className="position">
            <h1 className="Name">{beachesdetails.BeachName}</h1>
            <h1 className="headtag">Location:</h1>
            <p className="description">{beachesdetails.Location}</p>
            <h1 className="headtag">Specialities:</h1>
            <p className="description">{beachesdetails.Specialities}</p>
            <h1 className="headtag">Adventures:</h1>
            <p className="description">{beachesdetails.Adventures}</p>

            {(beachesimagedetails == "") ? <></> :
                <>
                {
                    beachesimagedetails.map((place)=>{
                    return <>
                        <img  className="contentimg" src={require(`${place.image}`)}></img>
                    </>
                    })
                }
                </>
            }


            <h1 className="headtag">Weather Details:</h1>
            <p className="description">{beachesdetails.WeatherDetails}</p>
            <h1 className="headtag">Opening Closing Time:</h1>
            <p className="description">{beachesdetails.OpeningClosingTime}</p>
            <h1 className="headtag">Cultural Significance:</h1>
            <p className="description">{beachesdetails.CulturalSignificance}</p>
            <h1 className="headtag">Local Attractions:</h1>
            <p className="description">{beachesdetails.LocalAttractions}</p>

            
        </div>
        </div>
    );
}
export default Beaches1;