import  React,{useState} from 'react';
import './App.css';
import FrontPage from "./Components/Front Page";
import EmergencyCall from "./Components/Emergency Call";


function App() {
    const [state,setState]=useState(0)
  return (
    <>
        {state===0 ? <FrontPage setState={setState}></FrontPage> :<EmergencyCall setState={setState} />}



    </>
  );
}

export default App;
