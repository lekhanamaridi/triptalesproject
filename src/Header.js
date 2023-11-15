import main from './images/main/main photo.jpg';
import './Header.css';
function Header()
{
    return(
        <div className='header'>
            <div className='heading'>
                <h1>Trip Tales</h1>
            </div>
            <div>
                <img src={main} className='main'></img>
            </div>
        </div>
    );
}
export default Header;