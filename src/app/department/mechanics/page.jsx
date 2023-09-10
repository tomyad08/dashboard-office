import PriorityMechanics from "./PriorityMechanics";
import ProgressMechanics from "./ProgressMechanic";
import TabelMechanics from "./Tabel";
import SideDashboard from "@/Components/SideBar";

const Mechanics = () => {
  return (
    <div className="flex">
      <div className="w-96">
        <SideDashboard />
      </div>
      <div className="bg-slate-400 h-screen">
        <div className="h-screen overflow-y-scroll py-5">
          <div className="flex justify-center ">
            <div className="w-11/12">
              <h1 className="text-2xl text-start font-bold pb-3">
                Mechanics Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
              >
                <PriorityMechanics />
                <ProgressMechanics />
              </div>
              <div
                className="bg-white p-2 rounded-xl drop-shadow-xl"
                id="Tabel"
              >
                <TabelMechanics />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mechanics;
