"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
function Progress({ input }) {
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
          datasets: [
            {
              data: input.planed,
              label: "Planed",
              borderColor: "#3e95cd",
              backgroundColor: "#13005A",
              fill: false,
            },
            {
              data: input.actual,
              label: "Actual",
              borderColor: "#3cba9f",
              backgroundColor: "#17594A",
              fill: false,
            },
          ],
        },
      });
    }
  }, []);
  return (
    <div className="flex justify-center">
      <div className="w-11/12 ">
        <div className="p-2 border border-0 rounded-xl">
          <h1 className="text-center text-2xl font-semibold">
            Exploration Bangkalan Progress
          </h1>
          <p className="text-sm p-2 text-justify">
            The gas exploration project curve is a visual representation of the
            timeline in the effort to discover and develop natural gas reserves.
            It reflects stages such as surveys, drilling, geological analysis,
            as well as the project's risks and success rate. This curve helps
            monitor and manage gas exploration projects.
          </p>
          <canvas
            ref={chartRef}
            className="w-screen border border-0 bg-green-100 rounded-lg p-2"
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default Progress;
