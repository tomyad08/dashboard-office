"use client";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js";

function PriorityFunction({ input }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Done", "Pending", "Reject"],
          datasets: [
            {
              data: [input.done, input.pending, input.reject],
              borderColor: [
                "rgb(15, 149, 47)",
                "rgb(37, 24, 164)",
                "rgb(194, 12, 21)",
              ],
              backgroundColor: [
                "rgb(15, 149, 47)",
                "rgb(37, 24, 164)",
                "rgb(194, 12, 21)",
              ],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            xAxes: [
              {
                display: false,
              },
            ],
            yAxes: [
              {
                display: false,
              },
            ],
          },
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-start">
      <div className="w-full">
        <canvas ref={chartRef}></canvas>
        <h1 className="my-5 text-center font-semibold text-xl">{input.name}</h1>
      </div>
    </div>
  );
}

export default PriorityFunction;
