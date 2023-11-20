import Gir1 from './images/wildlife/gir-national-park 1.jpg';
import Gir2 from './images/wildlife/gir-national-park 2.jpg';


function Gir(){
    return(
        <div className='maincontainer'>
            <h1 className='top'>Gir National Park & Wildlife Sanctuary - Gujarat</h1>
            <div>
                <h1 className='first'>Gir National Park and Wildlife Sanctuary is located in the western state of Gujarat, India. It is renowned for being the last refuge of the Asiatic lion, making it an essential conservation area. Here's some information about Gir National Park:</h1>
            </div>
            <div className='ballign'>
                <img className='imagetag1' src={Gir1}></img>
                <div className='bpara1'>
                    <p><b className='one'>Location:</b> Gir National Park is situated in the Saurashtra region of Gujarat, and it is part of the Kathiawar-Gir dry deciduous forests ecoregion.</p>
                    <p><b className='one'>Establishment:</b> Gir National Park was established in 1965 to protect the diminishing population of Asiatic lions.</p>
                    <p><b className='one'>Flora and Fauna:</b></p>
                    <p><b className='one'>Wildlife:</b> The park is famous for the Asiatic lion, and besides lions, it is home to various species of mammals, including leopards, Indian deer (chital), spotted deer (sambar), nilgai, and more. Gir is also a significant birdwatching destination with a variety of bird species.</p>
                    <p><b className='one'>Avian Diversity:</b> Gir National Park is home to numerous bird species, both resident and migratory, making it a haven for bird enthusiasts.</p>
                    <p><b className='one'>Safari Options:</b></p>
                    <p>Visitors to Gir National Park can explore the sanctuary through Jeep safaris. The park is divided into different zones, and safari timings may vary.</p>
                    <p><b className='one'>Best Time to Visit:</b></p>
                    <p>The park is open for visitors from mid-October to mid-June. The best time for wildlife sightings, especially lions, is considered to be from December to March when the weather is relatively cooler.</p>
                </div>
            </div>
            <div className='ballign'>
                <div className='bpara2'>
                <p><b className='one'>Accommodation:</b></p>
                    <p>There are various accommodation options available around Gir National Park, including forest lodges and private resorts. It's advisable to book accommodations in advance, especially during the peak tourist season.</p>
                    <p><b className='one'>Conservation Efforts:</b></p>
                    <p>Gir National Park has been instrumental in the conservation and protection of the Asiatic lion, and efforts are ongoing to ensure the survival and well-being of this endangered species.</p>
                    <p>Before planning a visit, it's recommended to check the official website or contact the park authorities for the most up-to-date information regarding entrance fees, safari options, and any specific guidelines for visitors.</p>
                    <p><b className='one'>Entrance Fees:</b></p>
                    <p>Entrance fees for Gir National Park can vary based on factors such as nationality (Indian or foreigner), type of vehicle, and the safari option chosen (Jeep safari, Canter safari, etc.). Fees are subject to change, and it's essential to check the official website or contact the park authorities for the latest rates.</p>
                    <p><b className='one'>Opening and Closing Times:</b></p>
                    <p>Gir National Park is typically open to visitors from mid-October to mid-June. The park remains closed during the monsoon season, which is roughly from mid-June to mid-October. The specific timings for safaris can vary based on the zones within the park and seasonal considerations. Morning and afternoon safari sessions are common, but these timings are subject to change, so it's advisable to confirm the schedule when planning your visit.</p>
                    <p>To get the most accurate and up-to-date information on entrance fees, safari options, and timings, please refer to the official website of Gir National Park or contact the park authorities directly. They will provide the latest and most reliable information for planning your visit.</p>
                </div>
                <img className='imagetag2' src={Gir2}></img>
            </div>
        </div>
    );
}
export default Gir;