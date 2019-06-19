import React, { Component } from "react";
import Loginpage from "./container/Loginpage";
import "./App.css";
import { Provider } from "react-redux";
import createStore from "./redux/configstore/Configstore";
import { BrowserRouter as Router } from "react-router-dom";
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
