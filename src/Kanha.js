import kanha1 from './images/wildlife/kanha-national-park 1.jpg';
import kanha2 from './images/wildlife/kanha-national-park 2.jpg';


function Kanha(){
    return(
        <div className='maincontainer'>
             <h1 className='top'>Kanha National Park - Madhyapradesh</h1>
            <div>
                <h1 className='first'>Kanha National Park is one of the largest and most well-known national parks in India, located in the state of Madhya Pradesh. Here's a brief overview:</h1>
            </div>
            <div className='ballign'>
                <img className='imagetag1' src={kanha1}></img>
                <div className='bpara1'>
                    <p><b className='one'>Location:</b> Kanha National Park is situated in the Maikal Hills of the Satpura Range in Madhya Pradesh, central India.</p>
                    <p><b className='one'>Establishment:</b> The park was established in 1955 and forms the core of the Kanha Tiger Reserve, created in 1974 under Project Tiger.</p>
                    <p><b className='one'>Flora and Fauna:</b></p>
                    <p><b className='one'>Wildlife:</b> Kanha is renowned for its rich biodiversity, including a significant population of Bengal tigers. Other wildlife species found in the park include leopards, sloth bears, barasingha (swamp deer), Indian wild dogs, and various species of deer and antelope.</p>
                    <p><b className='one'>Birdlife:</b> The park is a haven for birdwatchers, with over 300 species of birds, including eagles, vultures, and numerous migratory birds.</p>
                    <p><b className='one'>Safari Options:</b></p>
                    <p>Kanha National Park offers both Jeep safaris and elephant safaris for visitors to explore its diverse landscapes and observe wildlife. The park is divided into several zones, and safari timings can vary based on the zones and seasons.</p>
                    <p><b className='one'>Accommodation:</b></p>
                    <p>There are various accommodation options available around Kanha National Park, ranging from budget to luxury resorts. Many of these accommodations are designed to provide a close-to-nature experience.</p>
                    
                </div>
            </div>
            <div className='ballign'>
                <div className='bpara2'>
                    <p><b className='one'>Best Time to Visit:</b></p>
                    <p>The park is open to visitors from October to June, with the best time for wildlife sightings being during the winter months (November to February). The park is closed during the monsoon season (July to September).</p>
                    <p><b className='one'>Conservation Efforts:</b></p>
                    <p>Kanha National Park actively participates in conservation efforts, particularly for the protection of the Bengal tiger, and it has been successful in increasing the tiger population.</p>
                    <p>Before planning a visit, it's recommended to check the official website or contact the park authorities for the most up-to-date information regarding entrance fees, safari options, and any specific guidelines for visitors</p>
                    <p><b className='one'>Entrance Fees:</b></p>
                    <p>Entrance fees for Kanha National Park can vary based on factors such as nationality (Indian or foreigner), type of vehicle, and the safari option chosen (Jeep safari, elephant safari, etc.). Fees are subject to change, and it's essential to check the official website or contact the park authorities for the latest rates.</p>
                    <p><b className='one'>Opening and Closing Times:</b></p>
                    <p>Kanha National Park typically opens to visitors from October to June. The park is usually closed during the monsoon season, which is from July to September. The specific timings for safari rides can vary based on the zones within the park and seasonal considerations. Morning and afternoon safari sessions are common, but these timings are subject to change, so it's advisable to confirm the schedule when planning your visit.</p>

                </div>
                <img className='imagetag2' src={kanha2}></img>
            </div>
 
        </div>
    );
}
export default Kanha;