import heritage1 from './images/heritage/ajanta-ellora caves main.jpg';
import heritage2 from './images/heritage/hampi main.jpg';
import heritage3 from './images/heritage/jaipur-city main.jpg';
import heritage4 from './images/heritage/qutub-minar main.jpg';
import heritage5 from './images/heritage/rani-ki-var main.jpg';
import heritage6 from './images/heritage/sun-temple main.jpg';
import heritage7 from './images/heritage/taj-mahal main.jpg';

function Heritage(){
    return(
        <div className='bkgrnd'>
            <div>
                <h1 className='main'>HERITAGE</h1>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={heritage1}></img>
                <h1 className='name'>Ajanta and Ellora Caves - Maharashtra</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={heritage2}></img>
                <h1 className='name'>Hampi - Karnataka </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={heritage3}></img>
                <h1 className='name'>Jaipur City - Rajastan</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={heritage4}></img>
                <h1 className='name'>Qutub Minar - Delhi</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={heritage5}></img>
                <h1 className='name'>Rani-Ki Vav - Gujarath</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'> 
                <img className='image1' src={heritage6}></img>
                <h1 className='name'>Sun Temple - Konark </h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={heritage7}></img>
                <h1 className='name'>Taj Mahal - Aagra</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
        </div>
    );
}
export default Heritage;