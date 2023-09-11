"use client";

import SideDashboard from "@/Components/SideBar";
import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import PriorityLegal from "./PriorityLegal";
import ProgressLegal from "./ProgressLegal";
import TabelLegal from "./Tabel";

const Legal = () => {
  const ref = useRef(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="flex">
      <div>
        <SideDashboard />
      </div>
      <div className="bg-slate-400 h-screen">
        <div className="h-screen overflow-y-scroll py-5">
          <div className="flex justify-center ">
            <div className="w-11/12">
              <h1 className="text-2xl text-start font-bold pb-3">
                Accounting & Finance Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
                ref={ref}
              >
                <div
                  className="flex justify-end me-5 mt-2 hover:cursor-pointer"
                  onClick={onButtonClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </div>
                <PriorityLegal />
                <ProgressLegal />
              </div>
              <div
                className="bg-white p-2 rounded-xl drop-shadow-xl"
                id="Tabel"
              >
                <TabelLegal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Legal;
