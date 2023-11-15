import main from './images/pilgrimage/kedarnath 1.jpg';
import logofile from './images/main/logofile.png';
import main1 from './images/treking/kedarnath-trek 2.jpg';
import './Header.css'
import './Header.css';
function Header()
{
    return(
            <div className='background'>
                <div className='title'>
                    <div className='trip'>
                        <h1 >TRIP TALES</h1>
                    </div>
                    <div>
                        <h2 className='quote'>"Travel is not reward for working,<br></br>it's education for living."</h2>
                    </div>
                </div>
                
                <div>
                    <button className='plan' type='button'><b>--Plan Your Trip--</b></button>
                </div>
            </div>

    );
}
export default Header;