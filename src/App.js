import "./App.css";
import DownMenu from "./components/DownMenu";
import SideMenu from "./components/SideMenu";
import Home from "./pages/Home";
import { Route, Switch, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <DownMenu />
      <Switch>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/project'>

      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
