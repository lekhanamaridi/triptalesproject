import { useState } from 'react';

import login from './images/main/signin1.jpg';
import './Signin.css';

function Signin(){
    let [name,setname]=useState('')
    let [password,setpassword]=useState('')

    function senddata(){
        let data={
            'name':name,           
            'password':password
        }

        try{

            fetch('http://localhost:3000/funworld/signin',
            { method :'POST', headers:{'Content-Type' : 'application/json'} ,
                body: JSON.stringify(data) }
            )  .then((res) => res.json())
            .catch((error) => {
                console.error('Error:', error);
            });

            alert('data inserted')
        }
        catch (error){
            console.log(error)
        }
    }

    return(
        <div className='overall'>
            <div className='signallign'>
            <div>
                <img className='signinimg' src={login}></img>
            </div>
            <div>
                <h2 className='name1'><i>Trip Tales</i></h2>
                <div>
                    <input className='input' type="text" placeholder="User name Or E-mail" required onChange={(val)=>{setname(val.target.value)}}></input>
                </div>
                <div>
                    <input className='input' type="password" placeholder="Password" required onChange={(val)=>{setpassword(val.target.value)}}></input>
                </div>
                <button type='button' className='name2'  onClick={senddata}>Log In</button>
            </div>
            </div> 
        </div>
    );
}
export default Signin;