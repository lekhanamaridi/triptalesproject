import login from './images/main/signin1.jpg';
import './Signin.css';

function Signin(){
    return(
        <div className='overall'>
            <div className='signallign'>
            <div>
                <img className='signinimg' src={login}></img>
            </div>
            <div>
                <h2 className='name1'><i>Trip Tales</i></h2>
                <div>
                    <input className='input' type="text" placeholder="User name Or E-mail"></input>
                </div>
                <div>
                    <input className='input' type="password" placeholder="Password"></input>
                </div>
                <button type='button' className='name2'>Sign In</button>
            </div>
            </div> 
        </div>
    );
}
export default Signin;