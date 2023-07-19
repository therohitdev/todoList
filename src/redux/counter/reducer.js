import { COUNTER_UP, COUNTER_DOWN, COUNTER_UP_TO_N } from './const';

const initlize = {
  counter: 0
}

export default function counterReducer(state = initlize, action){
  switch(action.type){
    case COUNTER_UP: return{
      ...state, counter: state.counter + 1
    };
    default: return state;
  }
}
