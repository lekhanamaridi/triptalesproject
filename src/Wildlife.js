import image1 from './images/wildlife/bandipur-national-park main.jpg';
import image2 from './images/wildlife/gir-national-park main.jpg';
import image3 from './images/wildlife/jim-corbett-national-park main.jpg';
import image4 from './images/wildlife/kanha-national-park main.jpg';
import image5 from './images/wildlife/khangchendzomga-national-park main.jpg';
import image6 from './images/wildlife/wayanda-wildlife-sanctuary main.jpg';
import './Wildlife.css';

function Wildlife(){
    return(
        <div className='bkgrnd'>
            <div>
                <h1 className='main'>WILD LIFE</h1>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={image1}></img>
                <h1 className='name'>Bandipur National Park - Karnataka</h1>
                <button className='view'type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={image2}></img>
                <h1 className='name'>Gir National Park & Wildlife Sanctuary - Gujarath </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={image3}></img>
                <h1 className='name'>Jim Corbett National Park - Uttarkhand</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={image4}></img>
                <h1 className='name'>Kanha National Park - Madhyapradesh</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={image5}></img>
                <h1 className='name'>Khangechendzonga National Park - Sikkim</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'> 
                <img className='image1' src={image6}></img>
                <h1 className='name'>Wayanad Wildlife Sanctuary - Kerala</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
        </div>
    );
}
export default Wildlife;