import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Topbar from './Component/Topbar/Topbar';
import Home from './Pag/Hom/Home';
import { BrowserRouter as Router,
  Switch,
  Route  } from "react-router-dom"
function App() {
  return (
    <Router>
       <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/">
          <Home />
          </Route>

         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
