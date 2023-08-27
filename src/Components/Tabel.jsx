"use client";
import { useState } from "react";

const Tabel = ({ input }) => {
  const [condition, setCondition] = useState(false);
  const [status, setStatus] = useState("");

  const header = [
    {
      id: 1,
      name: "Task",
    },
    {
      id: 2,
      name: "Priority",
    },
    {
      id: 3,
      name: "Status",
    },
    {
      id: 4,
      name: "Download file",
    },
    {
      id: 5,
      name: "Submit file",
    },
    {
      id: 6,
      name: "Notes",
    },
  ];

  const Data = input;
  const styleOpt = "bg-white px-10 py-3 text-center";
  return (
    <div>
      {condition ? (
        <div>
          <div className="flex justify-end my-5">
            <div className="px-5 bg-white py-1 border border-2 border-slate-500 rounded-md mx-4">
              <select
                className="px-2"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option className={styleOpt} value="">
                  Status
                </option>
                <option className={styleOpt} value="Done">
                  Done
                </option>
                <option className={styleOpt} value="Pending">
                  Pending
                </option>
                <option className={styleOpt} value="Reject">
                  Reject
                </option>
              </select>
            </div>

            <div onClick={() => setCondition(!condition)} className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setCondition(!condition)}
          className="flex justify-end mt-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="white"
            class="bi bi-filter-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm.5 5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1zM4 8.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
      )}

      <div className="flex justify-around rounded-t-xl bg-green-600 mt-5">
        {header.map((value) => (
          <div
            className=" py-2 text-white font-semibold px-5 rounded-xl"
            key={value.id}
          >
            <h1>{value.name}</h1>
          </div>
        ))}
      </div>
      <div className="rounded-b-xl p-2 mb-5 bg-white">
        <div>
          {Data.filter((value) => {
            if (status === "") {
              return value;
            } else if (
              value.status.toLowerCase().includes(status.toLowerCase())
            ) {
              return value;
            }
          }).map((value) => (
            <div className="flex justify-around border-b-2 border-slate-300 p-2 text-sm">
              <div className="w-40 ">{value.task}</div>
              <div className="w-40">{value.priority}</div>
              <div className="w-40">{value.status}</div>
              <div className="w-40">{value.download}</div>
              <div className="w-40">{value.submit}</div>
              <div className="w-40">{value.notes}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tabel;
