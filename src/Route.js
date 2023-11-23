import {Routes,Route} from 'react-router-dom';
import Wildlife from './Wildlife';
import Heritage from './Heritage';
import Piligrimage from './Piligrimage';
import Beaches from './Beaches';
import Trecking from './Trecking';
import Funworld from './Funworld';
import Bandipur from './Bandipur';
import Wayanad from './Wayanad';
import Jim from './Jim';
import Khanjen from './Khanjen';
import Gir from './Gir';
import Kanha from './Kanha';
import Plan from './Plan';
import Header from './Header';
import Signin from './Signin';
import SignUp from './Signup';
import Funworld1 from './Funworld1';
import Trecking1 from './Trekking1';
import Heritage1 from './Heritage1';
import Piligrimage1 from './Piligrimage1';
import Beaches1 from './Beaches1';
import Contact from './Contact';

function Route1(){
    return(
        <Routes>
            <Route path='/' element={<Header></Header>}></Route>
            <Route path='/plan' element={<Plan></Plan>}></Route>
            <Route path='/wildlife' element={<Wildlife></Wildlife>}></Route>
            <Route path='/heritage' element={<Heritage></Heritage>}></Route>
            <Route path='/piligrimage' element={<Piligrimage></Piligrimage>}></Route>
            <Route path='/beaches' element={<Beaches></Beaches>}></Route>
            <Route path='/trecking' element={<Trecking></Trecking>}></Route>
            <Route path='/funworld' element={<Funworld></Funworld>}></Route>
            <Route path='/bandipur' element={<Bandipur></Bandipur>}></Route>
            <Route path='/wayanad' element={<Wayanad></Wayanad>}></Route>
            <Route path='/jim' element={<Jim></Jim>}></Route>
            <Route path='/khanjen' element={<Khanjen></Khanjen>}></Route>
            <Route path='/gir' element={<Gir></Gir>}></Route> 
            <Route path='/kanha' element={<Kanha></Kanha>}></Route>
            <Route path='/signin' element={<Signin></Signin>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/viewfunworld/:ParkName?' element={<Funworld1></Funworld1>}></Route>
            <Route path='/viewTreking/:Name?' element={<Trecking1></Trecking1>}></Route>
            <Route path='/viewheritage/:name?' element={<Heritage1></Heritage1>}></Route>
            <Route path='/viewpiligrim/:Name?' element={<Piligrimage1></Piligrimage1>}></Route>
            <Route path='/viewbeach/:BeachName?' element={<Beaches1></Beaches1>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>

    );
}
export default Route1;