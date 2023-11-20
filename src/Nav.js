import {Outlet,Link} from 'react-router-dom';
import user from './images/main/user.png';

function Nav(){
    return(
        <div className='nav'>
                <Link to='/header'>
                <div><button className='navelement' type='button'><h3>Home</h3></button></div>
                </Link>
                <div><button className='navelement' type='button'><h3>About</h3></button></div>
                <div><button className='navelement' type='button'><h3>Contact</h3></button></div>
                <Link to='/plan'>
                <div><button className='navelement' type='button'><h3>Categories</h3></button></div>
                </Link>
                <div><img className='user' src={user}></img></div>
        </div>

    );
}
export default Nav;