import { combineReducers } from 'redux';
import {Loginreducer} from './Loginreducer';
import {Signupreducer} from './Signupreducer';
import {Userlistreducer} from './Userlistreducer';
import {Addpollreducer} from './Addpollreducer';
const makeRootReducer =asyncReduces=>{
  const appReducer=combineReducers({
    Loginreducer ,
    Signupreducer ,
    Userlistreducer,
    Addpollreducer
  })
  return appReducer
}
export default makeRootReducer