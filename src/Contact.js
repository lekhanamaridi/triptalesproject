import phone from './images/main/telephone.png';
import './Contact.css';

function Contact(){
    return(
        <div className="contactbackground">
            <div className="contactall">
                <div>
                    <div>
                        <h2 className='heading2'><i>Reach Us...</i></h2>
                    </div>
                    <div className='contactus'>
                        <div>
                            <input className='context' type="text" placeholder="First Name"></input>
                        </div>
                        <div>
                            <input className='context' type="text" placeholder="Last Name"></input>
                        </div>
                        <div>
                            <input className='context' type="number" placeholder="Phone Number"></input>
                        </div>
                        <div>
                            <input className='context' type="text" placeholder="E-mail"></input>
                        </div>
                        <div>
                            <input className='context' type="text" placeholder="Message"></input>
                        </div>
                        <div>
                            <button className='submitbutton' type="button">Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='heading2'>Contact Us...</h2>
                    </div>
                    <div className='phoneallign'>
                        <div>
                            <img className='phoneimg' src={phone}></img>
                        </div>
                        <div>
                            <p className='phoneno'>+91 9113892089</p>
                        </div>
                    </div>
                </div>
            </div>         
        </div>
        
    );
}
export default Contact;