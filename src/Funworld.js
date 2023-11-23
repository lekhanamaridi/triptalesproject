import { Outlet,Link } from 'react-router-dom';

import fun1 from './images/adventure/imagicaa main.jpg';
import fun2 from './images/adventure/nicco-park main.jpg';
import fun3 from './images/adventure/ramogi-film-city main.jpg';
import fun4 from './images/adventure/snow-world main.jpg';
import fun5 from './images/adventure/wonderla-bang main.jpg';

function Funworld(){
    return(
        <div className='bkgrnd'>
            <div>
                <h1 className='main'>FUN WORLD</h1>
            </div>
            <div className='a'>
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={fun1}></img>
                    </div>
                    <h1 className='name'>Imagicaa Khopoli- Maharashtra </h1>
                    <Link to='/viewfunworld/Adlabs Imagica'>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={fun2}></img>
                    </div>
                    <h1 className='name'>Nicco Park - Kolkata</h1>
                    <Link to='/viewfunworld/Nicco Park'>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={fun3}></img>
                    </div>
                    <h1 className='name'>Ramoji Film City - Hyderabad</h1>
                    <Link to='/viewfunworld/Ramoji Film City'>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={fun4}></img>
                    </div>
                    <h1 className='name'>Snow World - Hyderabad</h1>
                    <Link to='/viewfunworld/Snow World'>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            
            
                <div className='allign1'>
                    <div className='imgallign'> 
                        <img className='image1' src={fun5}></img>
                    </div>
                    <h1 className='name'>Wonderla - Banglore</h1>
                    <Link to='/viewfunworld/Wonderla Amusement Park'>
                        <button className='view' type='button'>View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Funworld;