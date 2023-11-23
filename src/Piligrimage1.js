import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

function Piligrimage1(){
    let { Name } = useParams();

    let [piligrimdetails,setpiligrimDetails] = useState({})

    useEffect(()=>{

        let bodyData = { "Name":Name
        };

        fetch( 'http://localhost:3000/piligrimagedata',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setpiligrimDetails(val[0])
            }
        )})

    },[])

    let [piligrimimagedetails,setpiligrimimageDetails] = useState([])

    useEffect(()=>{

        let bodyData = { "Name":Name
        };

        fetch( 'http://localhost:3000/piligrimageimages',
            {
                method:"POST",
                body:JSON.stringify(bodyData),
                headers: { 'Content-Type': 'application/json'},
            }
        )

        .then((res)=>{
            res.json().then((val)=>{
                console.log(val)
                setpiligrimimageDetails(val)
            }
        )})

    },[])


    return(
        <div className="complete">
            <div className="position">
            <h1 className="Name">{piligrimdetails.Name}</h1>
            <h1 className="headtag">Location:</h1>
            <p className="description">{piligrimdetails.location}</p>
            <h1 className="headtag">Specialities:</h1>
            <p className="description">{piligrimdetails.Specialities}</p>
            <h1 className="headtag">Temple Complexities:</h1>
            <p className="description">{piligrimdetails.TempleComplexDescription}</p>
            <h1 className="headtag">Sculpture Monuments Description:</h1>
            <p className="description">{piligrimdetails.SculptureMonumentsDescription}</p>

            {(piligrimimagedetails == "") ? <></> :
                <>
                {
                    piligrimimagedetails.map((place)=>{
                    return <>
                        <img className="contentimg" src={require(`${place.image}`)}></img>
                        
                    </>
                    })
                }
                </>
            }

            <h1 className="headtag">Rituals Spirituality:</h1>
            <p className="description">{piligrimdetails.RitualsSpirituality}</p>
            <h1 className="headtag">Opening Closing Time:</h1>
            <p className="description">{piligrimdetails.OpeningClosingTimes}</p>
            <h1 className="headtag">Conservation:</h1>
            <p className="description">{piligrimdetails.ConservationCulturalHeritage}</p>
            <h1 className="headtag">Significance:</h1>
            <p className="description">{piligrimdetails.Significance}</p>            
            </div>

        </div>
    );
}
export default Piligrimage1;