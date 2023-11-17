import trek1 from './images/treking/harihar-fort-trek main.jpg';
import trek2 from './images/treking/himalayan-range main.jpg';
import trek3 from './images/treking/kedarnath-trek main.jpg';
import trek4 from './images/treking/kudremukha-trek main.jpg';
import trek5 from './images/treking/kumara-parvatha-trek main.jpg';
import trek6 from './images/treking/valley-of-flowers main.jpg';

function Trecking(){
    return(
        <div className='bkgrnd'>
            <div>
                <h1 className='main'>TREKKING</h1>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={trek1}></img>
                <h1 className='name'>Harihar Fort Trek - Maharashtra</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={trek2}></img>
                <h1 className='name'>Himalayan Range - Jarkhand </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={trek3}></img>
                <h1 className='name'>Kedarnath Trek - Uttarkhand</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={trek4}></img>
                <h1 className='name'>Kudremukha Trek - Karnataka</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={trek5}></img>
                <h1 className='name'>Kumara Parvatha Trek - Karnataka</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'> 
                <img className='image1' src={trek6}></img>
                <h1 className='name'>Valley of Flowers Trek - Uttarkhand</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
        </div>
    );
}
export default Trecking;