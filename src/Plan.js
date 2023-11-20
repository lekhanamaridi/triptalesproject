import { Outlet, Link } from 'react-router-dom';

import wildlife from './images/wildlife/wildlife.jpg';
import heritage from './images/heritage/heritage.jpg';
import trecking from './images/treking/treking.jpg';
import beaches from './images/beach/beach.jpg';
import piligrim from './images/pilgrimage/pilgrimage.jpg';
import adventure from './images/adventure/adventure park.png';
import './Plan.css';

function plan(){
    return(
        <div className='bkgrnd'>
            <div className='heading'>
                <h1 className='head'>Top Categories</h1>
            </div>
            <div className='allign'>
            <div className='card'>
                <Link to='/wildlife'>
                <img className='image' src={wildlife}></img>
                </Link>
                <h1 className='text'>Wildlife</h1>
            </div>
            <div className='card'>
                <Link to='/heritage'>
                <img className='image' src={heritage}></img>
                </Link>
                <h1 className='text'>Heritage</h1>
            </div>
            <div className='card'>
                <Link to='/trecking'>
                <img className='image' src={trecking}></img>
                </Link>
                <h1 className='text'>Trecking</h1>
            </div>
            </div>
            <div className='allign'>
            <div className='card'>
                <Link to='/beaches'>
                <img className='image' src={beaches}></img>
                </Link>
                <h1 className='text'>Beaches</h1>
            </div>
            <div className='card'>
                <Link to='/piligrimage'>
                <img className='image' src={piligrim}></img>
                </Link>
                <h1 className='text'>Piligrimage</h1>
            </div>
            <div className='card'>
                <Link to='/funworld'>
                <img className='image' src={adventure}></img>
                </Link>
                <h1 className='text'>Fun World</h1>
            </div>
            </div>
        </div>
    );
}
export default plan;