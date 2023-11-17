import fun1 from './images/adventure/imagicaa main.jpg';
import fun2 from './images/adventure/nicco-park main.jpg';
import fun3 from './images/adventure/ramogi-film-city main.jpg';
import fun4 from './images/adventure/snow-world main.jpg';
import fun5 from './images/adventure/wonderla-bang main.jpg';

function Funworld(){
    return(
        <div className='bkgrnd'>
            <div>
                <h1 className='main'>FUN WORLD</h1>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={fun1}></img>
                <h1 className='name'>Imagicaa Khopoli- Maharashtra </h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={fun2}></img>
                <h1 className='name'>Nicco Park - Kolkata</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={fun3}></img>
                <h1 className='name'>Ramoji Film City - Hyderabad</h1>
                <button className='view' type='button'>View</button>
            </div>
            <div className='allign1'>
                <img className='image1' src={fun4}></img>
                <h1 className='name'>Snow World - Hyderabad</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
            <div className='a'>
            <div className='allign1'>
                <img className='image1' src={fun5}></img>
                <h1 className='name'>Wonderla - Banglore</h1>
                <button className='view' type='button'>View</button>
            </div>
            </div>
        </div>
    );
}
export default Funworld;