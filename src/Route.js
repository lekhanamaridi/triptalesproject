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
import Plan from './Plan';
import Header from './Header';


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
        </Routes>

    );
}
export default Route1;