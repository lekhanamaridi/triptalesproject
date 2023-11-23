import { useState } from 'react';

import login from './images/main/signin1.jpg';

function SignUp(){
    let [name,setname]=useState('')
    let [email,setemail]=useState('')
    let [phone,setphone]=useState('')
    let [password,setpassword]=useState('')

    function senddata(){
        let data={
            'name':name,
            'phone':phone,
            'email':email,
            'password':password
        }

        try{

            fetch('http://localhost:3000/funworld/signup',
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
                    <input className='input' type="text" placeholder="Full Name" required onChange={(val)=>{setname(val.target.value)}}></input>
                </div>
                <div>
                    <input className='input' type="number" placeholder="Phone Number" required onChange={(val)=>{setphone(val.target.value)}}></input>
                </div>
                <div>
                    <input className='input' type="text" placeholder="E-mail" required onChange={(val)=>{setemail(val.target.value)}}></input>
                </div>
                <div>
                    <input className='input' type="password" placeholder="Password" required onChange={(val)=>{setpassword(val.target.value)}}></input>
                </div>
                <div>
                    <button  className='name2' onClick={senddata}>Sign Up</button>
                </div>
            </div>
            </div> 
        </div>
    );
}

export default SignUp;