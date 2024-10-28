import React from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/CounterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Decrement by amount
      </button>
      <button onClick={() => dispatch(incrementAsync(5))}>
        Increment by Async
      </button>
    </div>
  );
};

export default Counter;
