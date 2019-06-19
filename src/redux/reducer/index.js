import { combineReducers } from "redux";
import { Loginreducer } from "./Loginreducer";
import { Signupreducer } from "./Signupreducer";
import { Userlistreducer } from "./Userlistreducer";
import { Addpollreducer } from "./Addpollreducer";
import { Pollslistreducer } from "./Pollslistreducer";
import { Pollidreducer } from "./Pollidreducer";
import { SIGN_OUT } from "../action/actionType";

const makeRootReducer = asyncReduces => {
  const appReducer = combineReducers({
    Loginreducer,
    Signupreducer,
    Userlistreducer,
    Addpollreducer,
    Pollslistreducer,
    Pollidreducer
  });

  return appReducer;
};

export default makeRootReducer;
