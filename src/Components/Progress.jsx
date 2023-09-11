"use client";
import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import { DataProgress } from "@/DataDummy/DataProgress";
function Progress() {
  const Data = DataProgress;
  let planed_progress = [];
  let actual_progress = [];
  let label_progress = [];

  Data.map((value) => {
    planed_progress.push(value.progress_planing);
    actual_progress.push(value.actual_progress);
    label_progress.push(value.day);
  });

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [planed, setPlaned] = useState(planed_progress);
  const [actual, setActual] = useState(actual_progress);
  const [label, setLabel] = useState(label_progress);

  const handleFilter = () => {
    planed_progress = [];
    actual_progress = [];
    label_progress = [];
    let dayStart = Data.filter((value) => {
      if (value.date.includes(start)) {
        let number = value.day;
        return number;
      }
    });
    let dayEnd = Data.filter((value) => {
      if (value.date.includes(end)) {
        let number = value.day;
        return number;
      }
    });

    for (let i = dayStart[0].day; i <= dayEnd[0].day; i++) {
      planed_progress.push(Data[i].progress_planing);
      actual_progress.push(Data[i].actual_progress);
      label_progress.push(Data[i].day);
    }
    setPlaned(planed_progress);
    setLabel(label_progress);
    setActual(actual_progress);
    console.log(dayStart);
  };

  const chartRef = useRef(null);
  const data = [
    {
      id: 1,
      day: 288,
      name: "Current Day",
    },
    {
      id: 2,
      day: 351,
      name: "Total Day",
    },
    {
      id: 3,
      day: 63,
      name: "Left Day",
    },
  ];
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: label,
          datasets: [
            {
              data: planed,
              label: "Planed",
              borderColor: "#FD1818",

              fill: false,
            },
            {
              data: actual,
              label: "Actual",
              borderColor: "#2D18FD",

              fill: false,
            },
          ],
        },
      });
    }
  }, [label, actual, planed]);

  return (
    <div className="">
      <p className="text-sm p-2 text-justify mx-4">
        The gas exploration project curve is a visual representation of the
        timeline in the effort to discover and develop natural gas reserves. It
        reflects stages such as surveys, drilling, geological analysis, as well
        as the project's risks and success rate. This curve helps monitor and
        manage gas exploration projects.
      </p>
      <div className="flex justify-center">
        <div className="w-11/12 ">
          <div className="p-2 border border-0 rounded-xl">
            <div className="flex justify-between my-2">
              <div className="bg-green-800 pt-2 px-10 my-2">
                <h1 className="text-xl font-semibold text-white">Logo</h1>
              </div>
              <div className="flex justify-end mb-2">
                {data.map((value) => (
                  <div className="mx-5" key={value.id}>
                    <h1 className="text-2xl font-bold text-center text-blue-700">
                      {value.day}
                    </h1>
                    <h1 className="text-sm">{value.name}</h1>
                  </div>
                ))}
              </div>
              <div className="flex justify-end ">
                <div className="me-2">
                  <label className="text-sm">Start Date</label>
                  <br />

                  <input
                    className="p-1 border-b-2 border-black focus:outline-none text-sm w-24"
                    placeholder="10/01/2022"
                    onChange={(e) => setStart(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm">End Date</label>
                  <br />

                  <input
                    className="p-1 border-b-2 border-black focus:outline-none text-sm w-24"
                    placeholder="10/01/2022"
                    onChange={(e) => setEnd(e.target.value)}
                  />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-funnel mt-3 mx-2 hover:bg-blue-300 hover:cursor-pointer rounded-lg p-2"
                  viewBox="0 0 16 16"
                  onClick={handleFilter}
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                </svg>
              </div>
            </div>

            <canvas
              ref={chartRef}
              className="w-screen border border-0 bg-green-100 rounded-lg p-2"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
