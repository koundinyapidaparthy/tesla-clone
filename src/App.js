import TeslaHome from "./components/TeslaHome";
import Navbar from "./components/Navbar";

import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path="/" >
       <Navbar />   
            <TeslaHome />
         </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
