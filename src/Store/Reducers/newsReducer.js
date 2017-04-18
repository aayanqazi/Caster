import NewsAction from '../Action/Actions';

const INITIAL_STATE = {
  isProcessing : true,
  isError: false,
  errorMessage: {},
  news: {},
  catagories:false,
  source:"techcrunch"
};

function newsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case NewsAction.GETNEWS:
    return {...state, isProcessing:true, isError:false,catagories:false}; 
  case NewsAction.NEWS_SUCCESS:
    return {...state, isProcessing:false, isError:false,catagories:false , news: action.payload}
  case NewsAction.GETNEWS_FROM_SOURCE:
    return {...state, isProcessing:true, isError:false,catagories:true}; 
  case NewsAction.GET_NEWS_BY_CATAGORIES:
    return {...state,isProcessing:false,isError:false,news:action.payload,catagories:true}
  case NewsAction.CANCELLED:
    return {...state, isProcessing:false, isError:false}
  default:
    return state
  }
}

export default newsReducer;