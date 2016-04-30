import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from '../reducers/reducers';

const loggerMiddleware = createLogger();
let createStoreWithMiddleware;

/*eslint-disable */
if(process.env.NODE_ENV === 'production'){
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}
else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);
}
/*eslint-enable */

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducers, initialState);
}
