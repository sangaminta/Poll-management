import React, { Component } from 'react'
import Loginpage from './container/Loginpage'
import './App.css';
import {Provider} from 'react-redux';
import createStore from './redux/configstore/Configstore';
const store=createStore()
class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
      <div className ='App'>
        <Loginpage />
      </div>
      </Provider>
    )
  }
}

export default App

