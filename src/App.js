import React, { Component } from "react";
import Loginpage from "./container/Loginpage";
import "./App.css";
import { Provider } from "react-redux";
import createStore from "./redux/configstore/Configstore";
import { BrowserRouter as Router ,Link} from "react-router-dom";
import { Route } from "react-router-dom";
import Signuppage from "./container/Signuppage";
import Userlistpage from "./container/Userlistpage";
import Addpollpage from "./container/Addpollpage";
import Pollslistpage from "./container/Pollslistpage";
import Viewdetailpolls from "./container/Viewdetailpolls";

const store = createStore();

class App extends Component {
  
  render() {
    return (
      <div>
          <Provider store={store}>
          <Router>
            <div className="App">
            <nav className="navbar navbar-dark bg-primary">
                <Link to ={'/signup'} className='text-white'>Sign-Up</Link>
                <Link to ={'/addpoll'} className='text-white'>Add Poll</Link>
                <Link to ={'/login'} className='text-white'>Log in</Link>
                <Link to ={'/pollslist'} className='text-white'>Poll-List</Link>
          </nav>
              <Route exact path="/login" component={Loginpage} />
              <Route exact path="/signup" component={Signuppage} />
              <Route exact path="/userlist" component={Userlistpage} />
              <Route exact path="/addpoll" component={Addpollpage} />
              <Route exact path="/pollslist" component={Pollslistpage} />
              <Route exact path="/viewdetail/:id" component={Viewdetailpolls} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
