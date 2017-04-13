import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { counterEpic } from './Epic/Counter';
import { News_Request } from './Epic/news';
import incrementCounter from './Reducers/incrementCount';
import newsReducer from './Reducers/newsReducer';


const rootEpic = combineEpics(
  counterEpic.decrement,
  counterEpic.increment,
  News_Request.get_news
);

export const rootReducer = combineReducers({
  incrementCounter,
  newsReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;