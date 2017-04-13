import CounterAction from '../Action/Counter';

const INITIAL_STATE = {
    incrementState : 10
}

function incrementCounter(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CounterAction.INCREMENT:
    return Object.assign({}, state, { incrementState: state.incrementState + 1 });
    case CounterAction.DECREMENT:
    return Object.assign({}, state, { incrementState: state.incrementState - 1 }); 
  default:
    return state
  }
}

export default incrementCounter;