import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

function Trecking1() {
    let { Name } = useParams();

    let [trekkingdetails,settrekDetails] = useState([])

    useEffect(()=>{

        let bodyData = { 
            "Name":Name
        };

        fetch( 'http://localhost:3000/trekkingdata',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            },
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                settrekDetails(val[0])
            }
        )})

    },[])

    

    let [trekkingimagedetails,settrekkingimageDetails] = useState([])

    useEffect(()=>{

        let bodyData = { "Name":Name
        };

        fetch( 'http://localhost:3000/trekkingimages',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                settrekkingimageDetails(val)
            }
        )})

    },[])


    
    
    return(
        <div className="complete">
            <div className="position">
            <h1 className="Name">{trekkingdetails.Name}</h1>
            <h1 className="headtag">Location:</h1>
            <p className="description">{trekkingdetails.location}</p>
            <h1 className="headtag">Specialities:</h1>
            <p className="description">{trekkingdetails.Specialities}</p>
            <h1 className="headtag">Trekking Routes:</h1>
            <p className="description">{trekkingdetails.TrekkingRoutes}</p>

            {(trekkingimagedetails == "") ? <></> :
                <>
                {
                    trekkingimagedetails.map((place)=>{
                    return <>
                    <img className="contentimg" src={require(`${place.image}`)}></img>
                    </>
                    })
                }
                </>
                }


            <h1 className="headtag">Opening Closing Time:</h1>
            <p className="description">{trekkingdetails.OpeningClosingTimes}</p>
            <h1 className="headtag">Specialities Details:</h1>
            <p className="description">{trekkingdetails.SpecialitiesDetails}</p>
            <h1 className="headtag">Trekking Guides:</h1>
            <p className="description">{trekkingdetails.TrekkingGuides}</p>
            <h1 className="headtag">Preparation:</h1>
            <p className="description">{trekkingdetails.Preparation}</p>
            </div>
        </div>
    );
}
export default Trecking1;