import bandipur1 from './images/wildlife/bandipur-national-park 1.jpg';
import bandipur2 from './images/wildlife/bandipur-national-park 2.jpg';
import './Bandipur.css';

function Bandipur(){
    return(
        <div className='maincontainer'>
            <h1 className='top'>Bandipur National Park - Karnataka</h1>
            <div>
                <h1 className='first'>Bandipur National Park is a renowned wildlife sanctuary located in the state of Karnataka, India.
                Here's a brief overview:</h1>
            </div>
            <div className='ballign'>
                <img className='imagetag1' src={bandipur1}></img>
                <div className='bpara1'>
                    <p><b className='one'>Location:</b>Bandipur National Park is situated in the southern part of Karnataka, near the border with Tamil Nadu.</p>
                    <p><b className='one'>Entrance Fees:</b> The entrance fees to Bandipur National Park can vary, and it's advisable to check with official sources for the latest information. Generally, fees are charged per vehicle and per person.</p>
                    <p><b className='one'>Opening and Closing Times:</b> The park is usually open from 6:30 AM to 8:30 AM in the morning and from 3:30 PM to 5:30 PM in the evening for safari rides. However, these timings may vary, and it's essential to confirm with the authorities.</p>
                    <p><b className='one'>Specialities:</b></p>
                    <p><b className='one'>Biodiversity:</b> Bandipur is known for its rich biodiversity, including various species of flora and fauna. It's a part of the Nilgiri Biosphere Reserve.</p>
                    <p><b className='one'>Wildlife:</b> The park is home to diverse wildlife, including elephants, tigers, leopards, deer, and a variety of bird species. Safari rides provide opportunities to witness these animals in their natural habitat.</p>
                    <p><b className='one'>Scenic Beauty:</b> In addition to its wildlife, Bandipur boasts scenic landscapes with dense forests, hills, and water bodies.</p>
                </div>
            </div>
            <div className='ballign'>
                <div className='bpara2'>
                <p><b className='one'>Conservation:</b> Bandipur has been actively involved in wildlife conservation efforts, contributing to the preservation of endangered species.</p>
                <p>Before planning a visit, it's recommended to check the official website or contact the park authorities for the most up-to-date information regarding entrance fees, timings, and any specific guidelines for visitors.</p>
                <p><b className='one' >Best Time to Visit:</b></p>
                <p>The ideal time to visit Bandipur National Park is during the months of October to March when the weather is pleasant. The park is usually closed during the monsoon season (June to September).</p>
                <p><b className='one'>Conservation Initiatives:</b></p>
                <p>Bandipur National Park has been actively involved in wildlife conservation and has implemented various initiatives to protect and preserve the natural habitat. Visitors can learn about these efforts and contribute to the cause.</p>
                <p>Remember to adhere to the park rules and regulations, maintain eco-friendly practices, and respect the wildlife during your visit to Bandipur National Park.</p>
                </div>
                <img className='imagetag2' src={bandipur2}></img>
            </div>
        </div>
    );
}
export default Bandipur;