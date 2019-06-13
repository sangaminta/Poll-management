import { combineReducers } from 'redux';
import {Loginreducer} from './Loginreducer';
import {Signupreducer} from './Signupreducer'
import {Userlistreducer} from './Userlistreducer'
const makeRootReducer =asyncReduces=>{
  const appReducer=combineReducers({
    Loginreducer ,
    Signupreducer ,
    Userlistreducer
  })
  return appReducer
}
export default makeRootReducer