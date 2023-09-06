"use client";

import { DataDepartment } from "@/DataDummy/DataDepartment";
import { useState } from "react";

import Link from "next/link";

const CardDepartement = () => {
  const [count, setCount] = useState(0);
  const data = DataDepartment;
  console.log(data);
  if (count < 0) {
    setCount(data.length - 1);
  }
  if (count > data.length - 4) {
    setCount(0);
  }

  const dataSlice = data.slice(count, count + 3);
  return (
    <div>
      <div className="flex justify-between mt-2">
        <div
          className="flex-none me-3 mt-7 cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-caret-left-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082z" />
          </svg>
        </div>
        <div className="flex-auto w-96">
          <div className="columns-3 justify-between mt-2">
            {dataSlice.map((value) => (
              <div className="drop-shadow-xl">
                <Link href={value.link}>
                  <div
                    className="bg-white hover:bg-blue-100 p-2 mb-1 border rounded-xl"
                    key={value.id}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="green"
                      className="bi bi-bookmark-star font-semibold"
                      viewBox="0 0 16 16"
                    >
                      <path d={value.d1} />
                      <path d={value.d2} />
                    </svg>
                    <h1 className="text-md">{value.name}</h1>
                    <h1 className="text-sm font-semibold">
                      {value.total} employee
                    </h1>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div
          className="ms-3 mt-7 cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="white"
            className="bi bi-caret-right-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default CardDepartement;
