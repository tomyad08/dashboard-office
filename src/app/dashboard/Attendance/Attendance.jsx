"use client";
import { useState } from "react";

export default function Attendance() {
  const [condition, setCondition] = useState(true);
  const [greating, setGreating] = useState("Have a nice day");
  const [loading, setLoading] = useState(true);

  if (loading) {
    greetingFunction();
    setLoading(!loading);
    return;
  }

  function greetingFunction() {
    if (Number(new Date().getHours()) <= 11) {
      setGreating("Good morning, Have a nice day");
    } else if (
      Number(new Date().getHours()) > 11 &&
      Number(new Date().getHours()) < 17
    ) {
      setGreating("Good afternoon, Have a nice day");
    } else {
      setGreating("Good evening, Have a nice day");
    }
  }

  const valueStartFinish = condition ? "Start" : "Finish";
  const praStyle =
    "text-lg py-3 px-20 rounded-xl border border-4 text-xl text-white mt-10 mx-2 drop-shadow-xl";
  const styleStartFinish = condition
    ? `${praStyle} bg-green-800`
    : `${praStyle} bg-red-600`;

  const styleRest = condition
    ? `${praStyle} bg-slate-400 cursor-not-allowed`
    : `${praStyle} bg-blue-500 hover:bg-blue-700 hover:font-semibold`;

  return (
    <div>
      <div>
        <div className="font-semibold text-black drop-shadow-xl mt-20 p-2 rounded-lg bg-white w-72">
          {greating}
        </div>
        <h1 className="text-9xl font-bold text-center text-center mt-10 text-white text-shadow-xl">{`${new Date().getHours()}:${new Date().getMinutes()}`}</h1>
        <div className="flex justify-center">
          <button
            className={styleStartFinish}
            onClick={() => setCondition(!condition)}
          >
            {valueStartFinish}
          </button>
          <button className={styleRest}>Rest</button>
        </div>
      </div>
    </div>
  );
}
