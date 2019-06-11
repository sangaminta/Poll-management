
 import { applyMiddleware, createStore as createReduxStore } from "redux";
 import createSagaMiddleware from "redux-saga";
 import makeRootReducer from "../reducer/index";
 import rootSaga from "../rootsaga";
 import { composeWithDevTools } from "redux-devtools-extension";
   
   const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
   });
//    HTMLFormControlsCollection.log('kkkkkkkkk')
   const createStore = (initialState = {}) => {
   const sagaMiddleware = createSagaMiddleware();
   
    const enhancers = [];
   
    const middleware = [sagaMiddleware];
    if (process.env.NODE_ENV === `development`) {
      const { createLogger } = require(`redux-logger`);
      const logger = createLogger({
        collapsed: true
      });
      middleware.push(logger);
    }
    const store = createReduxStore(
      makeRootReducer(),
      initialState,
      composeEnhancers(applyMiddleware(...middleware), ...enhancers)
    );
    store.asyncReducers = {};
   
    if (module.hot) {
      module.hot.accept("../reducer", () => {
        const reducers = require("../reducer").default;
        store.replaceReducer(reducers(store.asyncReducers));
      });
    }
    
    sagaMiddleware.run(rootSaga);
    return store;
   };
   
   export default createStore;



