import SideDashboard from "@/Components/SideBar";
import PriorityLegal from "./PriorityLegal";
import ProgressLegal from "./ProgressLegal";
import TabelLegal from "./Tabel";

const Legal = () => {
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
                Legal Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
              >
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
