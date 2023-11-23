import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";


function Funworld1(){

    let { ParkName } = useParams();
    let [parkdetails,setparkDetails] = useState({});
    let [parkimage,setparkimageDetails] = useState([]);

    useEffect(()=>{

        let bodyData = { "ParkName":ParkName};

        fetch( 'http://localhost:3000/funworlddata',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setparkDetails(val[0])
            }
        )}).then(()=>{
            let bodyData2 = { "Name":ParkName
        };
    
        fetch( 'http://localhost:3000/funwordimages',
            {
                method:"POST",
                body:JSON.stringify(bodyData2),
                headers: { 'Content-Type': 'application/json'},
            },
        )
    
        .then((res)=>{
            
            res.json().then((val)=>{
               
                setparkimageDetails(val)
            }
        )})
        })  
    },[]);

    return(
        <div className="complete">
            <div className="position">
           
                <h1 className="Name">{parkdetails.ParkName}</h1>
                <h1 className="headtag">Location:</h1>
                <p className="description">{parkdetails.Location}</p>
                <h1 className="headtag">Overview:</h1>
                <p className="description">{parkdetails.OverviewDescription}</p>
                <h1 className="headtag">Attractions:</h1>
                <p className="description">{parkdetails.AttractionsDescription}</p>

                {(parkimage == "") ? <></> :
                <>
                {
                    parkimage.map((abc)=>{
                    return <>
                    <img className="contentimg" src={require(`${abc.image}`)}></img>
                    </>
                    })
                }
                </>
                }


                <h1 className="headtag">Adventures:</h1>
                <p className="description">{parkdetails.AdventuresDescription}</p>
                <h1 className="headtag">Weather Details:</h1>
                <p className="description" >{parkdetails.WeatherDetailsDescription}</p>
                <h1 className="headtag">Opening Closing Time:</h1>
                <p className="description">{parkdetails.OpeningClosingTimesDescription}</p>
                <h1 className="headtag">Additional Information:</h1>
                <p className="description">{parkdetails.AdditionalInformation}</p>

                
    </div>
        </div>
    );
} 
export default Funworld1;