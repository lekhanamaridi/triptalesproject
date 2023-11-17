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
                <img className='image1' src={pil1}></img>
                <h1 className='name'>Golden Temple - Amritsar </h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={pil2}></img>
                <h1 className='name'>Kedarnath - Uttarkhand </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={pil3}></img>
                <h1 className='name'>Murudeshwar Temple - Karnataka</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={pil4}></img>
                <h1 className='name'>Pushkar Temple - Rajastan</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={pil5}></img>
                <h1 className='name'>Rishikesh and Haridwar - Uttarkhand</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'> 
                <img className='image1' src={pil6}></img>
                <h1 className='name'>Tirupati Balaji Temple - Andra Pradesh </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={pil7}></img>
                <h1 className='name'>Varanasi - Uttarpradesh</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
        </div>
    );
}
export default Piligrimage;