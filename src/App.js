import TeslaHome from "./components/TeslaHome";
import Navbar from "./components/Navbar";

import {BrowserRouter as Router,Route,Switch,} from  "react-router-dom";
function App() {
  return (
    <>
      <Router>
          <Navbar />   
        <Switch>
          <Route  path="">
          <TeslaHome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
