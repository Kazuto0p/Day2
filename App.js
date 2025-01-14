
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

import Ssignup from './components/Ssignup';
import Nav from './components/Nav';
import StateBasics from './components/StateBasics';
import Buttoncolor from './components/Buttoncolor';
import Value from './components/Value';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Ssignup/>}/>
        <Route path='/state' element={<StateBasics/>}/>
        <Route path='/color' element={<Buttoncolor/>}/>
        <Route path='/value ' element={<Value/>}/>
      

      </Routes>
      
      
    </div>
  );
}

export default App;
