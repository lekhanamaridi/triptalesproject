import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import './Info.css'

function Heritage1(){

    let { name } = useParams();

    let [heritagedetails,setheritageDetails] = useState({})

    useEffect(()=>{

        let bodyData = { "name":name
        };

        fetch( 'http://localhost:3000/heritagedata',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setheritageDetails(val[0])
            }
        )})

    },[])


    

    let [heritageimagedetails,setheritageimageDetails] = useState([])

    useEffect(()=>{

        let bodyData = { "name":name
        };

        fetch( 'http://localhost:3000/heritageimages',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setheritageimageDetails(val)
            }
        )})

    },[])

    return(
        <div className="complete">
            <div className="position">
            <h1 className="Name">{heritagedetails.name}</h1>
            <h1 className="headtag">Location:</h1>
            <p className="description">{heritagedetails.location}</p>
            <h1 className="headtag">Heritage Architecture:</h1>
            <p className="description">{heritagedetails.heritagearchitecture1}</p>
            <p className="description">{heritagedetails.heritagearchitecture2}</p>

            {(heritageimagedetails == "") ? <></> :
                <>
                {
                    heritageimagedetails.map((place)=>{
                    return <>
                        <img className="contentimg" src={require(`${place.image}`)}></img>
                    
                    </>
                    })
                }
                </>
            }


            <h1 className="headtag">Entry Fee:</h1>
            <p className="description">{heritagedetails.entryfeedescription}</p>
            <h1 className="headtag">Opening & Closing Time:</h1>
            <p className="description">{heritagedetails.OpeningClosingTimesDescription}</p>
            <h1 className="headtag">Cultural Description:</h1>
            <p className="description">{heritagedetails.HeritageCultureDescription}</p>
            <h1 className="headtag">Activities:</h1>
            <p className="description">{heritagedetails.ActivitiesDescription}</p>
            </div>

        </div>
    );
}
export default Heritage1;