import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { counterUpFun } from '../redux/counter/action';

export default function StateMangement() {
  const data = useSelector(state => state);
  const dipatch = useDispatch();

  return (
    <div>
      <h1>Please check console</h1>
      <p>Counter: --- {data.counter}</p>
      <button onClick={() => dipatch(counterUpFun())}>COUNT UP</button>
    </div>
  )
}
