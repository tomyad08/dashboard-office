import SideDashboard from "@/Components/SideBar";
import PrioritySupportingField from "./PriorityMechanics";
import ProgressSupportingField from "./ProgressMechanic";
import TabelSupportingField from "./Tabel";

const SupportingField = () => {
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
                Supporting Field Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
              >
                <PrioritySupportingField />
                <ProgressSupportingField />
              </div>
              <div
                className="bg-white p-2 rounded-xl drop-shadow-xl"
                id="Tabel"
              >
                <TabelSupportingField />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SupportingField;
