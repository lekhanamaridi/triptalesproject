import { Link,Outlet } from 'react-router-dom';

import pil1 from './images/pilgrimage/golden-temple main.jpg';
import pil2 from './images/pilgrimage/kedarnath main.jpg';
import pil3 from './images/pilgrimage/murudeshwar-temple main.jpg';
import pil4 from './images/pilgrimage/pushkar main.jpg';
import pil5 from './images/pilgrimage/rishi-hari main.jpg';
import pil6 from './images/pilgrimage/tirupathi main.jpg';
import pil7 from './images/pilgrimage/varanasi main.jpg';

function Piligrimage(){
    return(
        <div className='bkgrnd'>
            
            <div>
                <h1 className='main'>PILIGRIMAGE</h1>
            </div>
            <div className='a'>
                <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={pil1}></img>
                    </div>
                    <h1 className='name'>Golden Temple - Amritsar </h1>
                    <Link to={'/viewpiligrim/Golden Temple'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={pil2}></img>
                    </div>
                    <h1 className='name'>Kedarnath - Uttarkhand </h1>
                    <Link to={'/viewpiligrim/Kedarnath Temple'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
            
                <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={pil3}></img>
                    </div>
                    <h1 className='name'>Murudeshwar Temple - Karnataka</h1>
                    <Link to={'/viewpiligrim/Murudeshwar Temple'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={pil4}></img>
                    </div>
                    <h1 className='name'>Pushkar Temple - Rajastan</h1>
                    <Link to={'/viewpiligrim/Pushkar Temple'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
            
                <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={pil5}></img>
                    </div>
                    <h1 className='name'> Haridwar - Uttarkhand</h1>
                    {/* <Link to={'/viewpiligrim/Triveni Ghat Temple, Rishikesh'}> */}
                        <Link to={'/viewpiligrim/Har Ki Pauri, Haridwar'}>
                            <button className='view' type='button'>View</button>
                        </Link>
                    {/* </Link> */}
                </div>
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={pil6}></img>
                    </div>
                    <h1 className='name'>Tirupati Balaji Temple - Andra Pradesh </h1>
                    <Link to={'/viewpiligrim/Tirupati Balaji Temple, Andhra Pradesh'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
            
                <div className='allign1'>
                    <div className='imgallign'>
                        <img className='image1' src={pil7}></img>
                    </div>
                    <h1 className='name'>Varanasi - Uttarpradesh</h1>
                    <Link to={'/viewpiligrim/Kashi Vishwanath Temple, Varanasi'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Piligrimage;