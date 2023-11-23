import { Link,Outlet } from 'react-router-dom';

import trek1 from './images/treking/harihar-fort-trek main.jpg';
import trek2 from './images/treking/himalayan-range main.jpg';
import trek3 from './images/treking/kedarnath-trek main.jpg';
import trek4 from './images/treking/kudremukha-trek main.jpg';
import trek5 from './images/treking/kumara-parvatha-trek main.jpg';
import trek6 from './images/treking/valley-of-flowers main.jpg';

function Trecking(){
    let Treckinglist = [{
        "image" : trek1,
        "name" : "Harihar Fort Trekking"
    },
    {
        "image" : trek2,
        "name" : "Himalayan Range Trekking - Jharkhand"
    },
    {
        "image" : trek3,
        "name" : "Kedarnath Trek"
    },
    {
        "image" : trek4,
        "name" : "Kudremukh Trek"
    },
    {
        "image" : trek5,
        "name": "Kumara Parvatha Trek"
    },
    {
        "image" : trek6,
        "name" : "Valley of Flowers Trek"
    }]
    
    return(
        <div className='bkgrnd'>
            <div>
                <h1 className='main'>TREKKING</h1>
            </div>
            <div className='a'>
            {
                Treckinglist.map((trek)=>{
                    return <>
                    <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={trek.image}></img>
                    </div>
                        <h1 className='name'>{trek.name}</h1>
                        <Link to={`/viewTreking/${trek.name}`}>
                        <button className='view' type='button'>View</button>
                        </Link>
                    </div>

                    </>
                })
            }
            </div>
        </div>
    );
}
export default Trecking;