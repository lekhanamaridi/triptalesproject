import main from './images/main/main photo.jpg';
import logofile from './images/main/logofile.png';

function Header()
{
    return(
        <div>
            <div>
                <img src={logofile}></img>
                <h1>Trip Tales</h1>
            </div>
            <div>
                <img src={main} className='main'></img>
            </div>
        </div>
    );
}
export default Header;