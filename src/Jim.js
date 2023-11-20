import jim1 from './images/wildlife/jim-corbett-national-park 1.jpg';
import jim2 from './images/wildlife/jim-corbett-national-park 2.jpg';


function Jim(){
    return(
        <div className='maincontainer'>
            <h1 className='top'>Jim Corbett National Park - Uttarkhand</h1>
            <div>
                <h1 className='first'>Jim Corbett National Park, named after the legendary hunter-turned-conservationist Jim Corbett, is one of the oldest and most prestigious national parks in India. Here's a short overview:</h1>
            </div>
            <div className='ballign'>
                <img className='imagetag1' src={jim1}></img>
                <div className='bpara1'>
                    <p><b className='one'>Location:</b> Jim Corbett National Park is situated in the Nainital district of Uttarakhand, India. It spans across the foothills of the Himalayas and covers a large area of dense forests, rivers, and grasslands.</p>
                    <p><b className='one'>Establishment:</b>Established in 1936 as Hailey National Park, it was later renamed Jim Corbett National Park in honor of Jim Corbett, who played a crucial role in its establishment and conservation.</p>
                    <p><b className='one'>Flora and Fauna:</b></p>
                    <p><b className='one'>Wildlife:</b>The park is renowned for its diverse wildlife, including Bengal tigers, elephants, leopards, various species of deer, and a wide array of bird species.</p>
                    <p><b className='one'>Bird Watching:</b>Jim Corbett is a paradise for bird enthusiasts, with over 600 species of birds, making it one of the richest bird regions in India.</p>
                    <p><b className='one'>Safari Options:</b></p>
                    <p>The park offers different safari options, including Jeep safaris, elephant safaris, and canter safaris. These safaris provide visitors with an opportunity to explore the wilderness and catch glimpses of the rich biodiversity.</p>
                </div>
            </div>
            <div className='ballign'>
                <div className='bpara2'>
                    <p><b className='one'>Accommodation:</b></p>
                    <p>There are various accommodation options available within and around the park, ranging from budget to luxury resorts and forest rest houses. It's advisable to book accommodations in advance, especially during the peak tourist season.</p>
                    <p><b className='one'>Best Time to Visit:</b></p>
                    <p>The park is open to visitors from mid-November to mid-June. The best time to visit is during the winter months (November to February) when the weather is pleasant, and wildlife sightings are more common.</p>
                    <p><b className='one'>Conservation Efforts:</b></p>
                    <p>Jim Corbett National Park has been actively involved in conservation initiatives and projects aimed at preserving the natural habitat and protecting endangered species.</p>
                    <p>Before planning a visit, it's recommended to check the official website or contact the park authorities for the most up-to-date information regarding entrance fees, safari options, and any specific guidelines for visitors.</p>
                </div>
                <img className='imagetag2' src={jim2}></img>
            </div>
        </div>
    );
}
export default Jim;