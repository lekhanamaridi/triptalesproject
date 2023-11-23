import {Outlet,Link} from 'react-router-dom';
import user from './images/main/user.png';

function Nav(){
    return(
        <div className='nav'>
                <Link to='/'>
                    <div><button className='navelement' type='button'><h3>Home</h3></button></div>
                </Link>
                    {/* <div><button className='navelement' type='button'><h3>About</h3></button></div> */}
                <Link to='/contact'>
                    <div><button className='navelement' type='button'><h3>Contact</h3></button></div>
                </Link>
                <Link to='/plan'>
                    <div><button className='navelement' type='button'><h3>Categories</h3></button></div>
                </Link>
                    <div><img className='user' src={user}></img></div>
                <Link to='/signin'>
                    <div><button className='navelement' type='button'><h3>SignIn</h3></button></div>  
                </Link>
                <Link to='/signup'>            
                    <div><button className='navelement' type='button'><h3>SignUp</h3></button></div>
                </Link>
        </div>

    );
}
export default Nav;