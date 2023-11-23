import { Link,Outlet } from 'react-router-dom';

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
                    <div className='imgallign'> 
                        <img className='image1' src={heritage1}></img>
                    </div>
                    <h1 className='name'>Ajanta and Ellora Caves - Maharashtra</h1>
                    <Link to={'/viewheritage/Ajanta and Ellora Caves'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={heritage2}></img>
                    </div>
                    <h1 className='name'>Hampi - Karnataka </h1>
                    <Link to={'/viewheritage/Hampi'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={heritage3}></img>
                    </div>
                    <h1 className='name'>Jaipur City - Rajastan</h1>
                    <Link to={'/viewheritage/Jaipur'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={heritage4}></img>
                    </div>
                    <h1 className='name'>Qutub Minar - Delhi</h1>
                    <Link to={'/viewheritage/Qutub Minar'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
            
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={heritage5}></img>
                    </div>
                    <h1 className='name'>Rani-Ki Vav - Gujarath</h1>
                    <Link to={'/viewheritage/Rani ki Vav'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'> 
                    <div className='imgallign'> 
                        <img className='image1' src={heritage6}></img>
                    </div>
                    <h1 className='name'>Sun Temple - Konark </h1>
                    <Link to={'/viewheritage/Sun Temple'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
            
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={heritage7}></img>
                    </div>
                    <h1 className='name'>Taj Mahal - Aagra</h1>
                    <Link to={'/viewheritage/Taj Mahal'}>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Heritage;