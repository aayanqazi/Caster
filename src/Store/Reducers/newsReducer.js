import CounterAction from '../Action/Counter';

const INITIAL_STATE = {
  isProcessing : false,
  isError: false,
  errorMessage: {},
  news: {}
};

function newsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CounterAction.GETNEWS:
    return {...state, isProcessing:true, isError:false}; 
  case CounterAction.NEWS_SUCCESS:
    return {...state, isProcessing:false, isError:false , news: action.payload}
  default:
    return state
  }
}

export default newsReducer;