import { Outlet,Link } from 'react-router-dom';

import image1 from './images/wildlife/bandipur-national-park main.jpg';
import image2 from './images/wildlife/gir-national-park main.jpg';
import image3 from './images/wildlife/jim-corbett-national-park main.jpg';
import image4 from './images/wildlife/kanha-national-park main.jpg';
import image5 from './images/wildlife/khangchendzomga-national-park main.jpg';
import image6 from './images/wildlife/wayanda-wildlife-sanctuary main.jpg';
import './Wildlife.css';

function Wildlife(){
    let WildlifeList = [{
        "Linkto" : '/bandipur',
        "image" : image1,
        "name" : "Bandipur National Park - Karnataka "
    },
    {
        "Linkto" : '/gir',
        "image" : image2,
        "name" : "Gir National Park - Gujarath "
    },
    {
        "Linkto" : '/jim',
        "image" : image3,
        "name" : "Jim Corbett National Park - Uttarkhand" 
    },
    {
        "Linkto" : './kanha',
        "image" : image4,
        "name" : "Kanha National Park-Madhyapradesh"
    },
    {
        "Linkto" : './khanjen',
        "image" : image5,
        "name" : "Khangechendzonga National Park - Sikkim"
    },
    {
        "Linkto" : './wayanad',
        "image" : image6,
        "name" : "Wayanad Wildlife Sanctuary - Kerala"
    }]
    return(

        <div className='bkgrnd'>
            <div>
                <h1 className='main'>WILD LIFE</h1>
            </div>
            <div className='a'>
            {
                WildlifeList.map((wild)=>{
                    return<>
                    <div className='allign1'>
                        <div className='imgallign'>
                        <img className='image1' src={wild.image}></img>
                        </div>
                        <h1 className='name'>{wild.name}</h1>
                        <Link to={wild.Linkto}>
                        <button className='view'type='button'>View</button>
                        </Link>
                    </div>
                    </>
                })
            }
            </div>           
        </div>
    );
}
export default Wildlife;