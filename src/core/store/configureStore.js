import { applyMiddleware, createStore } from 'redux';
//import reduxThunk                       from 'redux-thunk';
//import thunk 				from "redux-thunk";
import { createLogger }                 from 'redux-logger';
import rootReducer                      from '../reducers';

export default function configureStore(initialState) {

  // eslint-disable-next-line
  const logger = createLogger({
    collapsed: true,
    predicate: () =>
    process.env.NODE_ENV === 'development'
  });

  var thunkMiddleware = require('redux-thunk').default;

  var store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
  )

  //const middleware = applyMiddleware(reduxThunk, logger);
  //const store = middleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
