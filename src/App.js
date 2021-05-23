import TeslaHome from "./components/TeslaHome";
import Navbar from "./components/Navbar";

import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
function App() {
  return (
    <>

       <Navbar />   
      <TeslaHome />
 
    </>
  );
}

export default App;
