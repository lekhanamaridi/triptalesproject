import { Outlet, Link } from 'react-router-dom';

import wildlife from './images/wildlife/wildlife.jpg';
import heritage from './images/heritage/heritage.jpg';
import trecking from './images/treking/treking.jpg';
import beaches from './images/beach/beach.jpg';
import piligrim from './images/pilgrimage/pilgrimage.jpg';
import adventure from './images/adventure/adventure park.png';
import './Plan.css';

function plan(){

    let categoriesList = [{
        "linkTo" : "/wildlife",
        "image" : wildlife,
        "categoryName" : "Wildlife"
    },
    {
        "linkTo" : '/heritage',
        "image" : heritage,
        "categoryName" : "Heritage"
    },
    {
        "linkTo" : '/trecking',
        "image" : trecking,
        "categoryName" : "Trekking"
    },
    {
        "linkTo" : '/beaches',
        "image" : beaches,
        "categoryName" : "Beaches"
    },
    {
        "linkTo" : '/piligrimage',
        "image" : piligrim,
        "categoryName" : "Piligrimage"
    },
    {
        "linkTo" : '/funworld',
        "image" :  adventure,
        "categoryName" : "Fun World"
    }

];


    return(
        <div className='bkgrnd'>
            <div className='heading'>
                <h1 className='head'>Top Categories</h1>
            </div>
            <div className='allign'>
            {
            categoriesList.map((cat)=>{
                return <>
                <div className='card'>
                    <Link to={cat.linkTo}>
                    <img className='image' src={cat.image}></img>
                    </Link>
                    <h1 className='text'>{cat.categoryName}</h1>
                </div>
                </>
            })}
            </div>
            
                
           
            </div>
    );
}
export default plan;