import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import UserDetails from './UserDetails'; 
function App() {
  return ( 
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/> 
          </Route> 
          <Route path="/users/:id"> 
            <UserDetails  /> 
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}


export default App;