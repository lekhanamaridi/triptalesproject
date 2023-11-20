import wayanad1 from './images/wildlife/wayanda-wildlife-sanctuary 1.jpg';
import wayanad2 from './images/wildlife/wayanad-wildlife-sanctuary 2.jpg';

function Wayanad(){
    return(
        <div className='maincontainer'>
             <h1 className='top'>Wayanad Wildlife Sanctuary - Kerala</h1>
            <div>
                <h1 className='first'>Wayanad wildlife sanctuary is a renowned wildlife sanctuary located in the state of Kerala, India.
                Here's a brief overview:</h1>
            </div>
            <div className='ballign'>
                <img className='imagetag1' src={wayanad1}></img>
                <div className='bpara1'>
                        <p><b className='one'>Location:</b> Wayanad Wildlife Sanctuary is situated in the Wayanad district of Kerala, India.</p>
                        <p><b className='one'>Flora and Fauna:</b></p>
                        <p><b className='one'>Wildlife:</b> The sanctuary is home to various species of wildlife, including elephants, tigers, leopards, Indian bison (gaur), deer, and numerous bird species.</p>
                        <p><b className='one'>Flora:</b>The sanctuary is covered with dense forests, and it houses a variety of flora, including tropical moist deciduous, dry deciduous, and evergreen forests.</p>
                        <p><b className='one'>Safari Options:</b></p>
                        <p>Visitors to the Wayanad Wildlife Sanctuary can explore the park through Jeep safaris. These safaris provide an opportunity to witness the diverse wildlife and natural beauty of the region.</p>
                        <p><b className='one'>Best Time to Visit:</b></p>
                        <p>The best time to visit Wayanad Wildlife Sanctuary is during the cooler months, from October to May. Monsoon season (June to September) can be challenging for visiting due to heavy rainfall.</p>
                </div>
            </div>
            <div className='ballign'>
                <div className='bpara2'>
                    <p><b className='one'>Accommodation:</b></p>
                    <p>There are accommodations available in and around Wayanad, ranging from resorts to budget-friendly options, providing visitors with a comfortable stay.</p>
                    <p>Before planning a visit, it's advisable to check the latest information on the timings, entrance fees, and safari options by referring to the official website of the Wayanad Wildlife Sanctuary or contacting the park authorities for the most up-to-date details.</p>
                    <p><b className='one'>  Entrance Fees:</b></p>
                    <p>Entrance fees for wildlife sanctuaries and national parks can vary based on factors such as nationality (Indian or foreigner), type of vehicle, and other considerations. The fees are subject to change, so it's essential to check the official website of the Wayanad Wildlife Sanctuary or contact the park authorities directly for the most up-to-date information.</p>
                    <p><b className='one'>Opening and Closing Times:</b></p>
                    <p>The opening and closing times of the Wayanad Wildlife Sanctuary can also vary based on seasons and other factors. Wildlife sanctuaries typically have specific hours for visitors, and it's important to adhere to these schedules. Morning and afternoon safari sessions are common, but the exact timings can change, so it's advisable to confirm the schedule when planning your visit.</p>
                    <p>For the most accurate and current information on entrance fees, opening and closing times, and other details, please refer to the official website of the Wayanad Wildlife Sanctuary or contact the park authorities directly. They will provide the latest and most reliable information for planning your visit.</p>

                </div>
                <img className='imagetag2' src={wayanad2}></img>
            </div>
        </div>
    );
}
export default  Wayanad;