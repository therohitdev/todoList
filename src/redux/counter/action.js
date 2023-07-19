import { COUNTER_UP, COUNTER_DOWN, COUNTER_UP_TO_N } from './const';


export function counterUpFun(){
  return{
    type: COUNTER_UP,
    payload: true
  }
};