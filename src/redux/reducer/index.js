import { combineReducers } from 'redux';
import {Loginreducer} from './Loginreducer';
import {Signupreducer} from './Signupreducer'

const makeRootReducer =asyncReduces=>{
  const appReducer=combineReducers({
    Loginreducer ,
    Signupreducer
  })
  return appReducer
}
export default makeRootReducer