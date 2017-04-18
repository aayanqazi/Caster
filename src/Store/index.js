import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { News_Request } from './Epic/news';
import newsReducer from './Reducers/newsReducer';


const rootEpic = combineEpics(
  News_Request.get_news,
  News_Request.get_news_by_catagories
);

export const rootReducer = combineReducers({
  newsReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

const Store = createStoreWithMiddleware(
  rootReducer,
);

export default Store;