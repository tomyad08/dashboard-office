import SideDashboard from "@/Components/SideBar";
import PriorityProjectOffice from "./PriorityMechanics";
import ProgressProjectOffice from "./ProgressMechanic";
import TabelProjectOffice from "./Tabel";

const ProjectOffice = () => {
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
                Project Office Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
              >
                <PriorityProjectOffice />
                <ProgressProjectOffice />
              </div>
              <div
                className="bg-white p-2 rounded-xl drop-shadow-xl"
                id="Tabel"
              >
                <TabelProjectOffice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectOffice;
