import Header from './Header';

import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import './App.css';
import Route1 from './Route';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav></Nav>
        {/* <img src={require('./images/adventure/adventure park.png')}></img> */}
        {/* <Header></Header> */}
        <div className='route'>
        <Route1></Route1>
        </div>
        {/* <Wildlife></Wildlife>
        <Heritage></Heritage>
        <Piligrimage></Piligrimage>
        <Beaches></Beaches>
        <Trecking></Trecking>
        <Funworld></Funworld>
        <Bandipur></Bandipur>
        <Wayanad></Wayanad>
        <Khanjen></Khanjen>
        <Gir></Gir>
        <Jim></Jim> */}
    
        </BrowserRouter>
    </div>
  );
}

export default App;
