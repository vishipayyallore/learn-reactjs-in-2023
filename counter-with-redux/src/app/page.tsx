'use client';

import { SetCountValue } from "@/redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {

  const { count } = useSelector((state: any) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(SetCountValue(count + 1));
  };

  const decrement = () => {
    dispatch(SetCountValue(count - 1));
  };

  // Define a CSS class based on the count value
  const countClass =
    count === 0
      ? "text-blue-500"
      : count > 0
        ? "text-green-500"
        : "text-red-500";

  return (
    <div className="flex h-screen justify-center items-center flex-col gap-10">
      <h1 className="text-6xl font-bold text-blue-500 text-center">Count: <span className={`${countClass}`}>{count}</span></h1>

      <div className="flex gap-5">
        <button onClick={increment} className="bg-green-700 text-white px-5 py-2 rounded-sm shadow-sm">Increment</button>
        <button onClick={decrement} className="bg-red-500 text-white px-5 py-2 rounded-sm shadow-sm">Decrement</button>
      </div>
    </div>
  )
}