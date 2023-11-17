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
                <h1 className='head'>Plan Your Trip</h1>
            </div>
            <div className='allign'>
            <div className='card'>
                <img className='image' src={wildlife}></img>
                <h1 className='text'>Wildlife</h1>
            </div>
            <div className='card'>
                <img className='image' src={heritage}></img>
                <h1 className='text'>Heritage</h1>
            </div>
            <div className='card'>
                <img className='image' src={trecking}></img>
                <h1 className='text'>Trecking</h1>
            </div>
            </div>
            <div className='allign'>
            <div className='card'>
                <img className='image' src={beaches}></img>
                <h1 className='text'>Beaches</h1>
            </div>
            <div className='card'>
                <img className='image' src={piligrim}></img>
                <h1 className='text'>Piligrimage</h1>
            </div>
            <div className='card'>
                <img className='image' src={adventure}></img>
                <h1 className='text'>Fun World</h1>
            </div>
            </div>
        </div>
    );
}
export default plan;