import { combineReducers } from 'redux';
import {Loginreducer} from './Loginreducer';

const makeRootReducer =asyncReduces=>{
  const appReducer=combineReducers({
    Loginreducer
  })
  return appReducer
}
export default makeRootReducer