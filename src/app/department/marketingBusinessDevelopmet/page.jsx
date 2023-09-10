import SideDashboard from "@/Components/SideBar";
import PrioritymarketingBusinessDevelopment from "./PrioritymarketingBusinessDevelopment";
import ProgressmarkeingBusinessDevelopment from "./ProgressmarkeingBusinessDevelopment";
import TabelMarketingBusinessDevelopment from "./Tabel";

const marketingBusinessDevelopment = () => {
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
                Marketing & Business Dev. Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
              >
                <PrioritymarketingBusinessDevelopment />
                <ProgressmarkeingBusinessDevelopment />
              </div>
              <div
                className="bg-white p-2 rounded-xl drop-shadow-xl"
                id="Tabel"
              >
                <TabelMarketingBusinessDevelopment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default marketingBusinessDevelopment;
