import login from './images/main/signin1.jpg';

function SignUp(){
    return(
        <div className='overall'>
            <div className='signallign'>
            <div>
                <img className='signinimg' src={login}></img>
            </div>
            <div>
                <h2 className='name1'><i>Trip Tales</i></h2>
                <div>
                    <input className='input' type="text" placeholder="Full Name"></input>
                </div>
                <div>
                    <input className='input' type="number" placeholder="Phone Number"></input>
                </div>
                <div>
                    <input className='input' type="text" placeholder="E-mail"></input>
                </div>
                <div>
                    <input className='input' type="password" placeholder="Password"></input>
                </div>
                <div>
                    <button  className='name2'>Sign Up</button>
                </div>
            </div>
            </div> 
        </div>
    );
}
export default SignUp;