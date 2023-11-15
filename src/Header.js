import main from './images/pilgrimage/kedarnath 1.jpg';
import logofile from './images/main/logofile.png';
import main1 from './images/treking/kedarnath-trek 2.jpg';
import log from './images/main/log.jpg';
import './Header.css'

function Header()
{
    return(
        <div className='header'>
            <div className='heading'>
                <img className='lf' src={logofile}></img>
                <h1 className='text'><i>Trip Tales</i></h1>
                
            </div>
            <div className='quote'>
                <img src={main} className='main'></img>
                <h2 className='text1'>"Take only memories,leave only footprints.."</h2>
            </div>
            <div className='quote'>
                <h2 className='text2'>"Always say yes to new adventures.." </h2>
                <img className='main' src={main1}></img>
            </div>
            <div >
                <button className='button' type='button'><h2><i> -- Plan Your Trip --</i></h2></button>
            </div>
            
        </div>
    );
}
export default Header;