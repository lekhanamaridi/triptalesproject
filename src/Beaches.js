import beach1 from './images/beach/danushkodi-beach main.jpg';
import beach2 from './images/beach/gokarna-beach main.jpg';
import beach3 from './images/beach/marina-beach main.jpg';
import beach4 from './images/beach/tarkarli-beach main.jpg';
import beach5 from './images/beach/varkala-beach main.jpg';
import beach6 from './images/beach/palolem-beach-main.jpg';

function  Beaches(){
    return(
        <div className='bkgrnd'>
            
            <div>
                <h1 className='main'>BEACHES</h1>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={beach1}></img>
                <h1 className='name'>Danushkodi Beach - Tamilnadu </h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={beach2}></img>
                <h1 className='name'>Gokarna Beach - Karnataka </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={beach3}></img>
                <h1 className='name'>Marina Beach - Chennai</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={beach4}></img>
                <h1 className='name'>Tarkarli Beach - Maharashtra</h1>
                <button className='view' type='button'>View</button>            
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={beach5}></img>
                <h1 className='name'>Varkala Beach - Kerala</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'> 
                <img className='image1' src={beach6}></img>
                <h1 className='name'>Palolem Beach - Goa </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
        </div>
    );
}
export default Beaches;