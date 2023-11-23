import { useState } from 'react';

import ph from './images/main/telephone.png';
import location from './images/main/place.png';
import './Contact.css';

function Contact(){
    let [firstname,setfirstname]=useState('')
    let [lastname,setlastname]=useState('')
    let [phone,setphone]=useState('')
    let [email,setemail]=useState('')
    let [message,setmessage]=useState('')


    function senddata(){
        let data={
            'firstname':firstname,
            'lastname':lastname,
            'phone':phone,
            'email':email,
            'message':message
        }


        try{

            fetch('http://localhost:3000/funworld/contactus',
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
        <div className="contactbackground">
            <div className="contactall">
                <div>
                    <div>
                        <h2 className='heading2'><i>Reach Us...</i></h2>
                    </div>
                    <div className='contactus'>
                        <div>
                            <input className='context' type="text" placeholder="First Name" onChange={(val)=>{setfirstname(val.target.value)}}></input>
                        </div>
                        <div>
                            <input className='context' type="text" placeholder="Last Name" onChange={(val)=>{setlastname(val.target.value)}}></input>
                        </div>
                        <div>
                            <input className='context' type="number" placeholder="Phone Number" onChange={(val)=>{setphone(val.target.value)}}></input>
                        </div>
                        <div>
                            <input className='context' type="text" placeholder="E-mail" onChange={(val)=>{setemail(val.target.value)}}></input>
                        </div>
                        <div>
                            <input className='context' type="text" placeholder="Message" onChange={(val)=>{setmessage(val.target.value)}}></input>
                        </div>
                        <div>
                            <button className='submitbutton' type="button"  onClick={senddata}>Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='heading2'>Contact Us...</h2>
                    </div>
                    <div className='phonealign'>
                        <div>
                            <img className='phoneimg' src={ph}></img>
                        </div>
                        <div>
                            <p className='phoneno'>+91 9113892089</p>
                        </div>
                    </div>
                    <div className='phonealign'>
                        <div>
                            <img className='phoneimg' src={ph}></img>
                        </div>
                        <div>
                            <p className='phoneno'>+91 9108334675</p>
                        </div>
                    </div>
                    <div className='phonealign'>
                        <div>
                            <img className='phoneimg' src={ph}></img>
                        </div>
                        <div>
                            <p className='phoneno'>+91 8296064797</p>
                        </div>
                    </div>
                    <div className='phonealign'>
                        <div>
                            <img className='phoneimg' src={location}></img>
                        </div>
                        <div>
                            <p className='phoneno'>Banglore</p>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
        
    );
}
export default Contact;