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
              backgroundColor: "#7bb6dd",
              fill: false,
            },
            {
              data: input.actual,
              label: "Actual",
              borderColor: "#3cba9f",
              backgroundColor: "#71d1bd",
              fill: false,
            },
          ],
        },
      });
    }
  }, []);
  return (
    <div className="flex justify-start">
      <div className="w-4/5">
        <canvas ref={chartRef} className="w-screen border border-2"></canvas>
      </div>
    </div>
  );
}

export default Progress;
